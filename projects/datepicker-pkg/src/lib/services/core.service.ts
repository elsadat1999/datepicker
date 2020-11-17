import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private date: Date = new Date();
  public month = this.date.getMonth();
  public year = this.date.getFullYear();
  constructor() { }

  // gettier total days current month
  public get totalDayes() {
    return this.getTotalNumberDayOfmonth(this.year, this.month); //Total days
  }

  // get Info date by year and month 
  getInfoDate(year = this.year, month = this.month): any {
    let date = new Date(Number(year), Number(month)).toDateString();
    return date.split(' ');
  }


  // get total days of month by year and month
  getTotalNumberDayOfmonth(year = this.year, month = this.month): number {
    return new Date(Number(year), Number(month), 0).getDate();
  }

  //return total days after current month
  nextMonth(): number {
    if (this.month == 11) {
      this.month = 0;
      this.year = this.year + 1;
    } else {
      this.month = this.month + 1;
    }
    return this.getTotalNumberDayOfmonth(this.year, this.month);
  }

  //return total days before current month
  previousMonth(): number {
    if (this.month == 0) {
      this.month = 11;
      this.year = this.year - 1;
    } else {
      this.month = this.month - 1;
    }
    return this.getTotalNumberDayOfmonth(this.year, this.month);
  }
}
