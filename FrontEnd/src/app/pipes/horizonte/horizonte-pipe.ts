import { Pipe, PipeTransform } from '@angular/core';
import { HORIZONTE } from '../../consts/horizonte.const';

@Pipe({
  name: 'horizonte'
})
export class HorizontePipe implements PipeTransform {

  transform(value: string): string {
    let horizonteEncontrado = HORIZONTE.find(horizonte => horizonte.key === value);

    return horizonteEncontrado?.label || '';
  }

}
