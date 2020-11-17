import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  dayes = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // ;
  year = this.coreService.year; //Year
  currentYear = new Date().getFullYear; // currentYear
  month = this.coreService.getInfoDate()[1];  //Month;
  currentDay = new Date().getDate();
  deayName = this.coreService.getInfoDate()[0];
  totalDayes = Array(this.coreService.totalDayes);
  selectedDate: Date;
  currentDate = new Date().toLocaleDateString();
  openDate: boolean;


  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
  }


  // select day on date
  selectDate(date: any) {
    this.selectedDate = date;
    this.openDate = !this.openDate;
    console.log(this.selectedDate)
  }

  //return total dayes after current month
  nextMonth() {
    this.totalDayes = Array(this.coreService.nextMonth());
    this.refreshDate();
  }

  //return total dayes before current month
  previousMonth() {
    this.totalDayes = Array(this.coreService.previousMonth());
    this.refreshDate();
  }

  //date  refresh on click 
  refreshDate() {
    this.year = this.coreService.year;
    this.month = this.coreService.getInfoDate()[1];
    this.deayName = this.coreService.getInfoDate()[0];
    this.startDayOfManth();
  }


  //Determination first day of month
  startDayOfManth() {
    let widthItem = document.getElementById('row').getBoundingClientRect().width / 7;
    document.getElementById('spaceDayes').style.width = (widthItem * this.dayes.indexOf(this.deayName)) + 'px';
  }

  // open date Picker
  openDatePicker() {
    this.openDate = !this.openDate;
  }
}
