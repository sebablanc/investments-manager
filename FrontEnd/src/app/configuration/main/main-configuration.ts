import { Injectable } from '@angular/core';
import { MainButtons } from '../../models/main-buttons-dto';

@Injectable({
  providedIn: 'root',
})
export class MainConfiguration {
  buttons: MainButtons[] = [
    {
      label: 'Caucion',
      route: '/caucion',
      class: 'default-height',
      extraClass: '',
      icon: 'deadline.png',
    },
    {
      label: 'Fondos comunes de inversión',
      route: '/fci',
      class: 'default-height',
      extraClass: '',
      icon: 'target.png',
    },
    {
      label: 'Bonos',
      route: '/bonos',
      class: 'default-height',
      extraClass: '',
      icon: 'invoice.png',
    },
    {
      label: 'Obligaciones negociables',
      route: '/on',
      class: 'default-height',
      extraClass: '',
      icon: 'budget.png',
    },
    {
      label: 'Acciones',
      route: '/acciones',
      class: 'default-height',
      extraClass: '',
      icon: 'risk.png',
    },
    {
      label: 'Cedears',
      route: '/cedears',
      class: 'default-height',
      extraClass: '',
      icon: 'stock.png',
    },
    {
      label: 'Carteras',
      route: '/carteras',
      class: 'complete-row',
      extraClass: 'icon-in-row',
      icon: 'briefcase.png',
    },
  ];
}
