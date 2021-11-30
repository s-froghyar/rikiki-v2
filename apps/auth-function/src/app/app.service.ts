import { Injectable, Res, UnauthorizedException } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { firebase_params } from '../environments/serviceAccount';

@Injectable()
export class AppService {
  defaultApp: firebase.app.App;

  constructor() {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params)
    });
  }
  verifyToken(token: string): any {
    return this.defaultApp
      .auth()
      .verifyIdToken(token, true)
      .catch(err => {
        console.log('Error occured when verifying Id token');
        // throw new UnauthorizedException();
      });
  }
  storeInCache(token: any, expiresIn: number): Promise<string> {
    return this.defaultApp.auth().createSessionCookie(token, { expiresIn })
  }
}
