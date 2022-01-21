import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, expont?:number ): number {
    return Math.pow(value,isNaN(expont as number) ? 1 : (expont as number));
  }

}
