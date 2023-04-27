import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: number, coef: number, tva?:number): number {
    console.log('déclenché');

    if(tva) return val * coef * ( 1+ tva/100 )
    return val*coef;
    // 1200 * 3 * 1.20
  }
// {{arg1 | total :arg2  :arg3}}
}
