import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyListItemComponent } from './lobby/lobby-list-item/lobby-list-item.component';
import { LobbyInfoComponent } from './lobby/lobby-info/lobby-info.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ShellComponent,
    HomeComponent,
    GameInfoComponent,
    LobbyComponent,
    LobbyListItemComponent,
    LobbyInfoComponent,
  ],
  exports: [ShellComponent, HomeComponent],
})
export class UiModule {}
