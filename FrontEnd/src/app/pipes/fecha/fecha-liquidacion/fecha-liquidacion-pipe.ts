import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from '../../../utils/DateUtils';
import { format } from 'date-fns';

@Pipe({
  name: 'fechaLiquidacion',
})
export class FechaLiquidacionPipe implements PipeTransform {
  transform(value: Date, days: number): string {
    let fecha = new Date(value);
    let fechaObtenida = DateUtils.addDays(fecha, {
      days,
    });

    return format(fechaObtenida, 'dd/MM/yyyy');
  }
}
