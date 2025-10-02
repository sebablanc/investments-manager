import { Pipe, PipeTransform } from '@angular/core';
import { CalculatorUtils } from '../../../utils/CalculatorUtils';
import { ICaucion } from '../../../models/DTOs/ICaucion';

@Pipe({
  name: 'gananciaNeta',
})
export class GananciaNetaPipe implements PipeTransform {
  transform(value: ICaucion): number {
    let { monto, tna, dias, derecho_mercado, comision } = value;
    let importeBruto = CalculatorUtils.montoResultanteTNA(monto || 0, tna || 0, dias || 1);

    let importeDerechoMercado = CalculatorUtils.calcularDerechoMercado(
      monto || 0,
      derecho_mercado || 0,
      dias || 1
    );

    let importeComision = CalculatorUtils.calcularPorcentajePorDia(
      monto || 0,
      comision || 0,
      dias || 1
    );

    let importeIVA = CalculatorUtils.calcularIVA(importeComision + importeDerechoMercado);

    let importeNetoReal = importeBruto - importeComision - importeDerechoMercado - importeIVA;

    return importeNetoReal - monto;
  }
}
