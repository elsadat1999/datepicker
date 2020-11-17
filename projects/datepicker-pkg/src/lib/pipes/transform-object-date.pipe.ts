import { Pipe, PipeTransform } from '@angular/core';
import { CoreService } from '../services/core.service';

@Pipe({
  name: 'transformObjectDate'
})
export class TransformObjectDatePipe implements PipeTransform {
  constructor(private coreService: CoreService) {

  }
  transform(value: []): any[] {
    const dateMonth = [];
    for (let index = 0; index < value.length; index++) {

      dateMonth.push({
        date: `${this.coreService.month + 1}/${index + 1}/${this.coreService.year}`,
        day: (index + 1),
        month: this.coreService.month + 1,
        year: this.coreService.year
      })
    }
    return dateMonth;
  }

}
