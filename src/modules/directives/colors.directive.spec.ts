import { DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../components/date-button/button.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { TransformObjectDatePipe } from '../pipes/transform-object-date.pipe';
import { ColorsDirective } from './colors.directive';

describe('ColorsDirective', () => {

  let fixture: ComponentFixture<DatePickerComponent>;
  let component: DatePickerComponent;
  let element: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerComponent, ColorsDirective, ButtonComponent, TransformObjectDatePipe],
      providers: [ColorsDirective]

    }).compileComponents();
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
  }));

  it('Must be when add directive on element pricked the same class', () => {
    component.openDate = true;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.directive(ColorsDirective));
    expect(element.classes["primary"]).toEqual(true);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
