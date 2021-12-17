import { Injectable, NgZone } from '@angular/core';
import { User } from "@rikiki/utils";
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData!: firebase.User | null;
  token!: string;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public http: HttpClient, 
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        user.getIdToken().then(idToken => this.token = idToken);

        localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user') ?? '');
      } else {
        localStorage.setItem('user', '');
        // JSON.parse(localStorage.getItem('user') ?? '');
      }
    });
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.sendVerificationMail();
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  // Reset Forggot password
  forgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') ?? '');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider: firebase.auth.GoogleAuthProvider ) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          // navigate to subdomain 
          // window.location.href = 'https://stackoverflow.com/questions/66619945/error-auth-configuration-not-an-internal-error-has-occurred';
          // this.router.navigate('https://stackoverflow.com/questions/66619945/error-auth-configuration-not-an-internal-error-has-occurred');
        })
        this.setUserData(result.user);
        this.http.post(
          `${environment.apiUrl}/login`,
          { token: this.token },
          { 
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })
          .subscribe(resp => console.log(resp));
      }).catch((error) => {
        window.alert(error)
      })
  }

  async sendVerificationMail() {
    (await this.afAuth.currentUser)?.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}