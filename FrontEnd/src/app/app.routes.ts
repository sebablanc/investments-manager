import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Pantalla principal - Gestor de inversiones',
    loadComponent: () => import('./pages/main/main').then((m) => m.Main),
  },
  {
    path: 'caucion',
    title: 'Caución - Gestor de inversiones',
    loadComponent: () => import('./pages/caucion/caucion').then((m) => m.Caucion),
  },
  {
    path: 'fci',
    title: 'FCI - Gestor de inversiones',
    loadComponent: () =>
      import('./pages/fondos-comunes-inversion/fondos-comunes-inversion').then(
        (m) => m.FondosComunesInversion
      ),
  },
  {
    path: 'fci/new',
    loadComponent: () =>
      import('./pages/fondos-comunes-inversion/fci-new/fci-new').then((m) => m.FciNew),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
