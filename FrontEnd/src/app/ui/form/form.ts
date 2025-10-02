import { Component, Input, input, output } from '@angular/core';
import { SmallBotonera } from "../small-botonera/small-botonera";
import { InputForm } from '../../models/input-form';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, SmallBotonera],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  @Input('inputs') formInputs: InputForm[] = [];
  @Input() form: FormGroup = new FormGroup({});
  @Input() showDeleteButton: boolean = false;
  submit = output<boolean>();
  cancelClicked = output<boolean>();
  deleteClicked = output<boolean>();
  formClass = input<string>('caucion-form');

  onSubmit(){
    this.submit.emit(true);
  }
}
