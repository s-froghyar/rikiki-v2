import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { LangService } from '../../lang.service';
import { LANGUAGES } from '../../shared/enums';

@Component({
  selector: 'auth-lang-pref',
  templateUrl: './lang-pref.component.html',
  styleUrls: ['./lang-pref.component.scss'],
})
export class LangPrefComponent implements OnInit {
  options = [
    {
      name: 'English',
      id: LANGUAGES.Eng,
      selected: true
    },
    {
      name: 'German',
      id: LANGUAGES.Deu,
      selected: false
    },
    {
      name: 'Hungarian',
      id: LANGUAGES.Hun,
      selected: false
    },
  ];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<LangPrefComponent>,
    private _langService: LangService
  ) {}
  ngOnInit(): void {
    this.options.forEach(el => el.selected = el.id === this.data.selected);
  }
  selectPreference(item: LANGUAGES): void {
    this.options.forEach(el => el.selected = el.id === item);
  }
  setPreference(): void {
    this._langService.setPreference(this.options.find(el => el.selected)?.id ?? 0);
    this._bottomSheetRef.dismiss();
  }
}
