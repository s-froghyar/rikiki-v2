import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LANGUAGES } from './shared/enums';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public preferenceSubj: BehaviorSubject<LANGUAGES> = new BehaviorSubject<LANGUAGES>(LANGUAGES.Eng);
  // public preference: Observable<LANGUAGES> = this.preferenceSubj.asObservable();
  
  setPreference(pref: LANGUAGES): void {
    console.log(pref);
    
    this.preferenceSubj.next(pref);
  }
  getPreferenceObservabel(): Observable<LANGUAGES> {
    return this.preferenceSubj.asObservable();
  }
}
