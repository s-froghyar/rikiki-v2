import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rikiki-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
