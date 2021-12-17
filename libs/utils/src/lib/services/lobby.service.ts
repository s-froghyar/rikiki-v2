import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LobbyDto } from '../interfaces/lobby';


@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  userData!: firebase.User | null;
  token = '';

  lobbyCollection!: AngularFirestoreCollection<LobbyDto>;

  private _numOfLobbies = 0;
  private lobbyItems$: BehaviorSubject<LobbyDto[]> = new BehaviorSubject<LobbyDto[]>([]);


  constructor(
    private readonly afs: AngularFirestore,
    private readonly afAuth: AngularFireAuth,
    public ngZone: NgZone
  ) {
    console.log('lmao');
    
    

    this.initLobby();
  }
  initLobby(): void {
    // Listen for log in/out events and store token accordingly
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

    
    console.log('Loggin in...');
    if (!this.isLoggedIn) {
      this.authLogin(new firebase.auth.GoogleAuthProvider());
    } else {
      console.log('Logged in just fine bruv!');
    }
    
    this.lobbyCollection = this.afs.collection<any>('lobbies');
    this.lobbyCollection
      .valueChanges({idField: 'lobbyId'})
      // .pipe(filter(lobbies => lobbies.length !== this._numOfLobbies)) <-- in case too many requests
      .subscribe(lobbies => this.setLobbies(lobbies));
  }

  authLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          // navigate to subdomain
          console.log('logged in just fine');
          
          // window.location.href = 'https://stackoverflow.com/questions/66619945/error-auth-configuration-not-an-internal-error-has-occurred';
          // this.router.navigate('https://stackoverflow.com/questions/66619945/error-auth-configuration-not-an-internal-error-has-occurred');
        })
        // this.setUserData(result.user);
        // this.http.post(
        //   `${environment.apiUrl}/login`,
        //   { token: this.token },
        //   { 
        //     headers: {
        //       'Access-Control-Allow-Origin': '*'
        //     }
        //   })
        //   .subscribe(resp => console.log(resp));
      }).catch((error) => {
        window.alert(error)
      })
  }
  getAllLobbies(): Observable<LobbyDto[]> {
    return this.lobbyItems$.asObservable();
  }
  setLobbies(lobbies: LobbyDto[]): void {
    this._numOfLobbies = lobbies.length;
    this.lobbyItems$.next(lobbies);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') ?? '');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
}
