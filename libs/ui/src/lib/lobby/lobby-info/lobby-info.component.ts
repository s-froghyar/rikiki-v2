import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { faGavel, faInfoCircle, faLayerGroup, faRedoAlt, faSortDown, faSortUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { DisplayedLobby, Lobby } from '@rikiki/utils';

@Component({
  selector: 'rikiki-lobby-info',
  templateUrl: './lobby-info.component.html',
  styleUrls: ['./lobby-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyInfoComponent implements OnInit {
  @Input() set lobby(l: DisplayedLobby) {
    if (l) {
      console.log('updating info card');
      
      this._lobby = Object.assign({}, l);      
      this.isLoading = false;
      this.cd.detectChanges();
    }
  }
  get lobby(): DisplayedLobby {
    return this._lobby;
  }

  private _lobby!: DisplayedLobby;

  faAsc = faSortUp;
  faDesc = faSortDown;
  faHit = faGavel;
  faRedo = faRedoAlt;
  faMax = faLayerGroup;
  faUsers = faUsers;
  faInfo = faInfoCircle;
  isLoading = true;
  constructor(private readonly cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
