import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { TabService } from '../tab.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TabType } from '../core/interfaces/tabs.interface';

@Component({
  selector: 'rikiki-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit, OnDestroy {
  currentTab: TabType = 'game';
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(private readonly tabService: TabService) { }

  ngOnInit(): void {
    this.tabService.getCurrentTab().pipe(takeUntil(this.unsubscribe$))
      .subscribe((tab: TabType) => {
        this.currentTab = tab;
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  setTab(tab: TabType): void {
    this.tabService.setCurrentTab(tab);
  }

}
