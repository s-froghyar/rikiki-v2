import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Rule, RuleType } from '@rikiki/utils';

import { SelectItem } from '../selector/selector.interface';

@Component({
  selector: 'rikiki-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
})
export class RuleComponent {
  @Input() set rule(r: Rule) {
    this.ruleType = r.type;
    this._rule = r;
  }
  get rule(): Rule {
    return this._rule;
  }
  private _rule!: Rule;

  @Output() ruleChanged: EventEmitter<Rule> = new EventEmitter<Rule>();

  ruleType!: RuleType;

  numItems: SelectItem[] = [...Array(16).keys()].slice(1).map((num) => {
    return {
      id: num.toString(),
      displayValue: num.toString(),
      selected: num === 10,
    };
  });
  faInfo = faInfo;
  constructor() {}

  emitChange($event: any): void {
    this.ruleChanged.emit({ ...this._rule, value: $event });
  }
  identify(_: number, item: any) {
    return item.id;
  }
}
