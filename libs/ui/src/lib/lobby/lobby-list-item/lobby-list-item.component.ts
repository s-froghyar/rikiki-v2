import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rikiki-lobby-list-item',
  templateUrl: './lobby-list-item.component.html',
  styleUrls: ['./lobby-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyListItemComponent implements OnInit {
  @Input() lobby: any;
  constructor() { }

  ngOnInit(): void {
  }

}
