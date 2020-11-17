import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'date-picker', pathMatch: 'full' },
  { path: 'date-picker', loadChildren: () => import('../modules/date-picker.module').then(m => m.DatePickerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
