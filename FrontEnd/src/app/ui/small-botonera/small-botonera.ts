import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-small-botonera',
  imports: [],
  templateUrl: './small-botonera.html',
  styleUrl: './small-botonera.scss',
})
export class SmallBotonera {
  submitLbl = input('Aceptar');
  deleteLbl = input('Eliminar');
  disabled = input(true);
  showCancelButton = input(true);
  showDeleteButton = input(true);
  cancelClicked = output<boolean>();
  submitClicked = output<boolean>();
  deleteClicked = output<boolean>();
}
