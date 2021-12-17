import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyListItemComponent } from './lobby/lobby-list-item/lobby-list-item.component';
import { LobbyInfoComponent } from './lobby/lobby-info/lobby-info.component';
import { CreateModalComponent } from './lobby/create-modal/create-modal.component';
import { RulesSectionComponent } from './rules-section/rules-section.component';
import { RuleComponent } from './rules-section/rule/rule.component';
import { LobbyService } from '@rikiki/utils';

import { environment } from './environments/environments';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    ShellComponent,
    HomeComponent,
    GameInfoComponent,
    LobbyComponent,
    LobbyListItemComponent,
    LobbyInfoComponent,
    CreateModalComponent,
    RulesSectionComponent,
    RuleComponent,
  ],
  exports: [ShellComponent, HomeComponent],
  providers: [
    LobbyService
  ]
})
export class UiModule {}
