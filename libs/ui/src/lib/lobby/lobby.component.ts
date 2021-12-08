import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lobby, mockLobbies } from '@rikiki/utils';
import { CreateModalComponent } from './create-modal/create-modal.component';


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
  constructor(private readonly modal: MatDialog) { }

  ngOnInit(): void {
    this.lobbies
  }
  selectLobby(id: number): void {
    const ind = this.lobbies.findIndex(lobby => lobby.id === id);
    this.lobbies.forEach(l => l.selected = false);
    this.lobbies[ind].selected = true;
    this.selectedLobby = Object.assign({}, this.lobbies[ind]);
  }

  openCreateModal(): void {
    const dialogRef = this.modal.open(CreateModalComponent, {
      width: '500px',
      panelClass: 'overflow-hidden',
      disableClose: true
      // height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
