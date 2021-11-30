import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Lobby } from '@rikiki/utils';
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
  @Input() lobby!: Lobby;

  isLoading = true;
  faAsc = faSortUp;
  faDesc = faSortDown;
  faHit = faGavel;
  faRedo = faRedoAlt;
  faMax = faLayerGroup;
  faUsers = faUsers;
  faShow = faAngleDoubleRight;
  constructor() {}

  ngOnInit(): void {
    this.initLobby();
    this.isLoading = false;
  }

  initLobby(): void {
    const adminPlayerName =
      this.lobby.players.find((player) => player.isAdmin)?.name ?? 'Admin';
    this.lobby.displayName = `${adminPlayerName} et al.`;
  }
}
