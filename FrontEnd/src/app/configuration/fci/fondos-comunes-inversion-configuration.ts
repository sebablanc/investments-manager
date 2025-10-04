import { Injectable } from '@angular/core';
import { InputForm } from '../../models/input-form';
import { Clase } from '../../consts/clase.const';
import { TIPO_INVERSION } from '../../consts/tipo_inversion.const';
import { MONEDA } from '../../consts/moneda.const';
import { HORIZONTE } from '../../consts/horizonte.const';
import { PLAZO_LIQUIDACION } from '../../consts/plazo_liquidacion.const';

@Injectable({
  providedIn: 'root',
})
export class FondosComunesInversionConfiguration {
  tablaFciHeaders: string[] = [
    'Nombre',
    'Gerente',
    'Clase',
    'Valor cuotaparte',
    'Tipo de inversión',
    'Benchmark',
    'Horizonte',
  ];

  fciInputs: InputForm[] = [
    { label: 'Nombre', type: 'text', formControlName: 'nombre' },
    { label: 'Clase', type: 'select', formControlName: 'clase', values: Clase },
    { label: 'Valor Cuotaparte', type: 'number', formControlName: 'valorCuotaparte' },
    { label: 'Porcentaje Día', type: 'number', formControlName: 'porc_dia' },
    { label: 'Porcentaje Mes', type: 'number', formControlName: 'porc_mes' },
    { label: 'Porcentaje Año actual', type: 'number', formControlName: 'porc_anno' },
    { label: 'Porcentaje Anual', type: 'number', formControlName: 'porc_anual' },
    { label: 'Porcentaje Honorarios', type: 'number', formControlName: 'porc_honorarios' },
    {
      label: 'Tipo de inversión',
      type: 'select',
      formControlName: 'tipo_inversion',
      values: TIPO_INVERSION,
    },
    { label: 'Benchmark', type: 'text', formControlName: 'benchmark' },
    { label: 'Moneda', type: 'select', formControlName: 'moneda', values: MONEDA },
    { label: 'Horizonte', type: 'select', formControlName: 'horizonte', values: HORIZONTE },
    { label: 'Inversión mínima', type: 'number', formControlName: 'inversion_minima' },
    {
      label: 'Plazo de liquidación',
      type: 'select',
      formControlName: 'plazo_liquidacion',
      values: PLAZO_LIQUIDACION
    },
    { label: 'Gerente', type: 'text', formControlName: 'gerente' },
  ];
}
