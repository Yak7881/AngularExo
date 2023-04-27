import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalCaht'
})
export class TotalCahtPipe implements PipeTransform {

  transform(caht: number, tva: number ): number {
    return caht*(1 + tva / 100);
  }

}


