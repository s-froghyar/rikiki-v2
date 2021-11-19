import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rikiki-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
