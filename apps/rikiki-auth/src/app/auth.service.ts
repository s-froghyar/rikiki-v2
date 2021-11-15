import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private readonly afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((value: any) => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/profile');
   })
    .catch((error: any) => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: firebase.auth.GoogleAuthProvider): Promise<any> {
    return this.afAuth.signInWithPopup(provider);
  }
}