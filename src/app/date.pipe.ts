import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value): number {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    let today = new Date();

    const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const utc2 = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate());

    return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));
  }

}
