import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    if (!value) return '';
    return value.toUpperCase();
  }

}
