import { Component, Input, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Rule } from '@rikiki/utils';

@Component({
  selector: 'rikiki-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  @Input() rule!: Rule;

  faInfo = faInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
