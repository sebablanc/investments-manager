import { Injectable } from '@angular/core';
import { InputForm } from '../../models/input-form';

@Injectable({
  providedIn: 'root',
})
export class CaucionConfiguration {
  tablaCaucionHeaders: string[] = [
    'Fecha Inversión',
    'Monto Invertido',
    'TNA %',
    'Fecha de liquidación',
    'Días',
    'Monto a obtener',
  ];

  caucionInputs: InputForm[] = [
    { label: 'Fecha', type: 'date', formControlName: 'fecha' },
    { label: 'Monto', type: 'number', formControlName: 'monto' },
    { label: 'TNA %', type: 'number', formControlName: 'tna' },
    { label: 'Comisión %', type: 'number', formControlName: 'comision' },
    { label: 'Cantidad de días', type: 'number', formControlName: 'dias' },
    { label: 'Derecho de mercado %', type: 'number', formControlName: 'derecho_mercado' },
  ];
}
