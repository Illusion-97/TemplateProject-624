import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 15, suffix: string = ' ...'): string {
    return value.substring(0, limit) + (value.length > limit ? suffix : '');
  }

  /*transform(text: string): string {
    return text.substring(0, 15) + ' ...'
  }*/
}
