import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { firebase_params } from '../environments/serviceAccount';

import { AppService } from './app.service';

@Controller('auth')
export class AppController {

  defaultApp: firebase.app.App;

  constructor(private readonly appService: AppService) {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params)
    });    
  }

  @Post('login')
  setLoginCookie(@Body() body: {token: string}) {
    console.log(`verifying token: ${body.token}`);
    
    this.defaultApp
      .auth()
      .verifyIdToken(body.token, true)
      .then(decodedToken => {
        console.log(decodedToken);
      })
      .catch(err => {
        console.log(err);
      });

    return this.appService.getData();
  }

  @Get('status')
  getStatus() {
    return 'yeet';
  }
}
