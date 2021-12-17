import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayedLobby, Lobby, LobbyService, mockLobbies } from '@rikiki/utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreateModalComponent } from './create-modal/create-modal.component';


@Component({
  selector: 'rikiki-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent implements OnInit, OnDestroy {
  @Input() lobbyType = 'Public';

  lobbies!: DisplayedLobby[];
  selectedLobby!: DisplayedLobby;
  private unsubscribe$: Subject<any> = new Subject<any>();
  constructor(
    private readonly modal: MatDialog,
    private readonly lobbyService: LobbyService,
    private readonly cd: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.listenForLobby();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
      // try to create lobby and show lobby page if successful
    });
  }
  private listenForLobby(): void {
    this.lobbyService.getAllLobbies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lobbiesDto => {
        console.log(lobbiesDto);
        
        this.lobbies = Array.from( lobbiesDto.map((dto, i, _) => new DisplayedLobby(dto, i)));
        const selectedLobbyInd = this.lobbies.findIndex(l => l.lobbyId === this.selectedLobby?.lobbyId);
        if (selectedLobbyInd !== -1) {
          this.selectedLobby = Object.assign({}, this.lobbies[selectedLobbyInd])
        }
        this.cd.detectChanges();
    })
  }

}
