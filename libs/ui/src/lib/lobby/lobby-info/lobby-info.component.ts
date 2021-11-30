import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faGavel, faInfoCircle, faLayerGroup, faRedoAlt, faSortDown, faSortUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Lobby } from '@rikiki/utils';

@Component({
  selector: 'rikiki-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyInfoComponent implements OnInit {
  @Input() lobby!: Lobby;

  faAsc = faSortUp;
  faDesc = faSortDown;
  faHit = faGavel;
  faRedo = faRedoAlt;
  faMax = faLayerGroup;
  faUsers = faUsers;
  faInfo = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
