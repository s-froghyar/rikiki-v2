import { Component, OnInit, Input } from '@angular/core';
import { Lobby } from '@rikiki/utils';

@Component({
  selector: 'rikiki-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
