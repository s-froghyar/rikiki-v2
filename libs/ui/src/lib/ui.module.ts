import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyListItemComponent } from './lobby/lobby-list-item/lobby-list-item.component';
import { LobbyInfoComponent } from './lobby/lobby-info/lobby-info.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellComponent, HomeComponent, GameInfoComponent, LobbyComponent, LobbyListItemComponent, LobbyInfoComponent],
  exports: [ShellComponent, HomeComponent],
})
export class UiModule {}
