import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { faChevronDown, faChevronUp, faCopy, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { defaultGameRules, defaultLobbyRules, Rule } from '@rikiki/utils';
import { dropDownAnim } from '../../core/animations/lobby-anims';
import { environment } from '../../environments/environments';

@Component({
  selector: 'rikiki-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
  animations: [dropDownAnim]
})
export class CreateModalComponent implements OnInit {

  fg!: FormGroup;
  lobbyIcons = [...Array(5).keys()].slice(1).map((num, i, _) =>  {
    return {
      url: `${environment.s3Url}/assets/lobby_icons/${num}.min.jpg`,
      selected: i === 1
    }
  })
  // selectedIconUrl!: string;

  faClose = faTimes;
  faEdit = faEdit;
  faCopy = faCopy;
  faUp = faChevronDown;
  faDown = faChevronUp;

  selectingIcon = false;
  isLoading = true;
  showLobbyRules = true;
  showGameRules = true;
  constructor(private readonly fb: FormBuilder) { }


  get selectedIconUrl(): string {
    return this.fg.get('iconUrl')?.value ?? ''
  }

  get lobbyRules(): FormArray {
    return this.fg.controls['lobbyRules'] as FormArray;
  }
  get gameRules(): FormArray {
    return this.fg.controls['gameRules'] as FormArray;
  }
  ngOnInit(): void {
    // this.selectedIconUrl = this.lobbyIcons[0].url;
    this.fg = this.fb.group({
      iconUrl: this.fb.control(this.lobbyIcons[0].url),
      name: this.fb.control('lmao et al.'),
      lobbyRules: this.fb.array(defaultLobbyRules),
      gameRules: this.fb.array(defaultGameRules)
    })
    this.isLoading = false;
  }
  identify(i: number, _:any) {
    return i;
  }
  showItPlz() {
    console.log(this.fg.get('gameRules')?.value);
    console.log(this.fg.get('lobbyRules')?.value);
    console.log(this.fg);
  }
  onRuleChange(ind: number, toggle: number, $event: Rule): void {
    if (toggle === 0) {
      this.lobbyRules.at(ind).setValue($event);
    } else {
      this.gameRules.at(ind).setValue($event);
    }
  }
}
