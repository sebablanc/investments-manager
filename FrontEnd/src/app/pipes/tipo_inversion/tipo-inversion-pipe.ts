import { Pipe, PipeTransform } from '@angular/core';
import { TIPO_INVERSION } from '../../consts/tipo_inversion.const';

@Pipe({
  name: 'tipoInversion'
})
export class TipoInversionPipe implements PipeTransform {

  transform(value: string): string {
    let tipoEncontrado = TIPO_INVERSION.find(tipo => tipo.key === value);
    
    return tipoEncontrado?.label || '';
  }

}
