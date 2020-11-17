import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get total days current month', () => {
    expect(service.totalDayes).toBeTruthy();
  })

  it('Get total days of month by year and month', () => {
    let totalDayes = service.getTotalNumberDayOfmonth(2020, 10);
    expect(totalDayes).toEqual(31);
  })


  it('get Info date by year and month ', () => {
    let infoMonth = service.getInfoDate(2020, 10);
    expect(infoMonth).toEqual(["Sun", "Nov", "01", "2020"]);
  })

  it('change next month must be trans to month after ', () => {
    service.month = 10;
    service.nextMonth();
    expect(service.month).toEqual(11);
  })


  it('change next month must be trans to month after ', () => {
    service.month = 10;
    service.nextMonth();
    expect(service.month).toEqual(11);
  });

  it('change next month must be trans to month before ', () => {
    service.month = 10;
    service.previousMonth();
    expect(service.month).toEqual(9);
  });

  it('When the last month of the year changes from the current year to the previous year', () => {
    service.month = 11;
    service.year = 2020;
    service.nextMonth();
    expect(service.month).toEqual(0);
    expect(service.year).toEqual(2021);
  });

  it('When the first month of the year changes from the current year to the previous year', () => {
    service.month = 0;
    service.year = 2020;
    service.previousMonth();
    expect(service.month).toEqual(11);
    expect(service.year).toEqual(2019);
  })
});
