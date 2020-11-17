import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateYearsComponent } from './date-years.component';

describe('DateYearsComponent', () => {
  let component: DateYearsComponent;
  let fixture: ComponentFixture<DateYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
