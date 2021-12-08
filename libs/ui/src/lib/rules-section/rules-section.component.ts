import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Rule } from '@rikiki/utils';
import { dropDownAnim } from '../core/animations/lobby-anims';

@Component({
  selector: 'rikiki-rules-section',
  templateUrl: './rules-section.component.html',
  styleUrls: ['./rules-section.component.scss'],
  animations: [
    dropDownAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesSectionComponent implements OnInit {
  @Input() name = 'lmao';
  @Input() rules: Rule[] = [
    {
      type: 'toggle',
      displayName: 'Private?',
      info: 'lmao',
      value: true
    },
    {
      type: 'toggle',
      displayName: 'Private?',
      info: 'lmao',
      value: true
    }
  ];

  showContent = true;

  faUp = faChevronDown;
  faDown = faChevronUp;
  constructor() { }

  ngOnInit(): void {
  }

}
