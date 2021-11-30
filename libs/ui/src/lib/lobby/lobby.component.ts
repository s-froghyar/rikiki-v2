import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Lobby, mockLobbies } from '@rikiki/utils';


@Component({
  selector: 'rikiki-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent implements OnInit {
  @Input() lobbyType = 'Public';

  lobbies: Lobby[] = mockLobbies;
  selectedLobby!: Lobby;// = mockLobbies[0];
  constructor() { }

  ngOnInit(): void {
    this.lobbies
  }
  selectLobby(id: number): void {
    const ind = this.lobbies.findIndex(lobby => lobby.id === id);
    this.lobbies.forEach(l => l.selected = false);
    this.lobbies[ind].selected = true;
    this.selectedLobby = Object.assign({}, this.lobbies[ind]);
  }

}
