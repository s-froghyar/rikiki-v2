import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangPrefComponent } from './lang-pref.component';

describe('LangPrefComponent', () => {
  let component: LangPrefComponent;
  let fixture: ComponentFixture<LangPrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangPrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangPrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
