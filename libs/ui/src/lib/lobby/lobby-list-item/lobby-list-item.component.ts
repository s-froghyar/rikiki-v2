import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { DisplayedLobby, Lobby } from '@rikiki/utils';
import {
  faSortUp,
  faSortDown,
  faGavel,
  faRedoAlt,
  faLayerGroup,
  faUsers,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rikiki-lobby-list-item',
  templateUrl: './lobby-list-item.component.html',
  styleUrls: ['./lobby-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LobbyListItemComponent implements OnInit {
  @Input() set lobby(l: DisplayedLobby) {
    this._lobby = Object.assign({}, l);
    this.cd.detectChanges();
  }
  get lobby(): DisplayedLobby {
    return this._lobby;
  }

  private _lobby!: DisplayedLobby;


  isLoading = true;
  faAsc = faSortUp;
  faDesc = faSortDown;
  faHit = faGavel;
  faRedo = faRedoAlt;
  faMax = faLayerGroup;
  faUsers = faUsers;
  faShow = faAngleDoubleRight;
  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initLobby();
    this.isLoading = false;
  }

  initLobby(): void {
    if (!this.lobby.name) {
      const adminPlayerName =
        this.lobby.players.find((player) => player.id === this.lobby.adminId)?.name ?? 'Admin';
      this.lobby.name = `${adminPlayerName} et al.`;
    }
  }
}
