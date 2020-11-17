import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/date-button/button.component';
import { ColorsDirective } from './directives/colors.directive';
import { TransformObjectDatePipe } from './pipes/transform-object-date.pipe';
import { DateYearsComponent } from './components/date-years/date-years.component';


const routes: Routes = [
  { path: '', component: DatePickerComponent }
]



@NgModule({
  declarations: [DatePickerComponent, ButtonComponent, ColorsDirective, TransformObjectDatePipe, DateYearsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[ColorsDirective]
})
export class DatePickerModule { }
