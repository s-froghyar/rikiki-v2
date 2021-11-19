import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TabType } from '../core/interfaces/tabs.interface';
import { TabService } from '../tab.service';

@Component({
  selector: 'rikiki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTab: TabType = 'game';
  private unsubscribe$: Subject<any> = new Subject<any>();
  
  constructor(private readonly tabService: TabService) { }

  ngOnInit(): void {
    this.tabService.getCurrentTab().pipe(takeUntil(this.unsubscribe$))
      .subscribe(tab => {
        this.currentTab = tab;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
