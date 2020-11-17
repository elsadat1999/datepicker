import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ColorsDirective } from 'src/modules/directives/colors.directive';
import { TransformObjectDatePipe } from 'src/modules/pipes/transform-object-date.pipe';
import { ButtonComponent } from '../date-button/button.component';

import { DatePickerComponent } from './date-picker.component';
import { CoreService } from '../../services/core.service';
import { By } from '@angular/platform-browser';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let service: CoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerComponent, ColorsDirective, ButtonComponent, TransformObjectDatePipe],
      providers: [ColorsDirective,
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    }).compileComponents();
    service = TestBed.inject(CoreService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Should create component', () => {
    expect(component).toBeTruthy();
  });


  it('When click button next month must be trans to month after', () => {
    let currentMonth = service.month;
    let button = fixture.debugElement.query(By.css('[icon_name="keyboard_arrow_right"]'));
    button.triggerEventHandler('click', {});
    expect(service.month).toEqual(currentMonth + 1);
  });


  it('When click button previous month must be trans to month before', () => {
    let currentMonth = service.month;
    let button = fixture.debugElement.query(By.css('[icon_name="keyboard_arrow_left"]'));
    button.triggerEventHandler('click', {});
    expect(service.month).toEqual(currentMonth - 1);
  });


  it('Determine first day of month', () => {

    //Determine first day of month November.
    service.month = 10;
    let firstName = service.getInfoDate()[0];
    component.startDayOfManth();
    expect(firstName).toBe('Sun');

    //Determine first day of month December.
    service.month = 11;
    firstName = service.getInfoDate()[0];
    expect(firstName).toBe('Tue');
  });


  it('When click on button must be open date picker ', () => {
    component.openDate = false;
    let button = fixture.debugElement.query(By.css('.button-date-picker'));
    button.triggerEventHandler('click', {});
    expect(component.openDate).toEqual(true);
    button.triggerEventHandler('click', {});
    expect(component.openDate).toEqual(false);
  });



});
