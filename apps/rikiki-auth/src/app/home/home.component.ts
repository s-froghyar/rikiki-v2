import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LangService } from '../lang.service';
import { LANGUAGES } from '../shared/enums';
import { welcomeTexts } from './home_texts';
import { LangPrefComponent } from './lang-pref/lang-pref.component';

@Component({
  selector: 'auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTexts = welcomeTexts.en;
  lang = LANGUAGES.Eng;
  unsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _langService: LangService
  ) { }
  
  ngOnInit(): void {
    this._langService.getPreferenceObservabel()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lang => {
        this.lang = lang;
        switch (lang) {
          case LANGUAGES.Eng:
            this.currentTexts = Object.assign({}, welcomeTexts.en)
            break;
          case LANGUAGES.Deu:
            this.currentTexts = Object.assign({}, welcomeTexts.de)
            break;
          case LANGUAGES.Hun:
            this.currentTexts = Object.assign({}, welcomeTexts.hu)
            break;
        }        
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  openLangPref(): void {
    this._bottomSheet.open(LangPrefComponent, 
      { data: {selected: this.lang} });
  }
}