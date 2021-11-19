import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellComponent, HomeComponent, GameInfoComponent, LobbyComponent],
  exports: [ShellComponent, HomeComponent],
})
export class UiModule {}
