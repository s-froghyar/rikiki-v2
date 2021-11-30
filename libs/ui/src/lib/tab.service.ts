import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabType } from './core/interfaces/tabs.interface';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  currentTabSource$: BehaviorSubject<TabType> = new BehaviorSubject<TabType>(0);
  constructor() { }

  getCurrentTab(): Observable<TabType> {
    return this.currentTabSource$.asObservable();
  }
  setCurrentTab(tab: TabType): void {
    this.currentTabSource$.next(tab);
  }
}
