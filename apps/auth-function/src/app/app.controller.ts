import { Body, Controller, Get, Post, Redirect, Res, UnauthorizedException } from '@nestjs/common';
import { CookieOptions, Response } from 'express';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  // @Redirect('https://arena.rikiki.co', 302)
  setLoginCookie(@Body() body: { token: string }, @Res() response: Response) {
    console.log(`verifying token: ${body.token}`);
    console.log(response);
    try {
      this.appService.verifyToken(body.token);
    } catch (e) {
      if (e instanceof UnauthorizedException) {
        console.log('ID token could not be authorized');
      }
      response.status(401).send('UNAUTHORIZED REQUEST!');
      return;
    }

    const expiresIn = 1000 * 60 * 60; // an hour
    this.appService
      .storeInCache(body.token, expiresIn)
      .then((sessionCookie) => {
        const options: CookieOptions = {
          domain: '.rikiki.co',
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        };
        response.status(201).cookie('__session', sessionCookie, options);
        response.end(JSON.stringify({ status: 'success' }));
      })
      .catch(err => {
        response.status(401).send('UNAUTHORIZED REQUEST!');
      });
  }

  @Get('status')
  getStatus() {
    return 'yeet';
  }
}
