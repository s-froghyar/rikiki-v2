import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faCopy, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rikiki-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {
  fg = new FormGroup({
    icon: new FormControl(''),
    name: new FormControl('lmao et al.'),
    lobbyRules: new FormControl(''),
    gameRules: new FormControl('')
  });

  faClose = faTimes;
  faEdit = faEdit;
  faCopy = faCopy;

  selectingIcon = false;
  isLoading = true;
  constructor() { }

  ngOnInit(): void {
    // this.value = '';
    this.isLoading = false;
  }

}
