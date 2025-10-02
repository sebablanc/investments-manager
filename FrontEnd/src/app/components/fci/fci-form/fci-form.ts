import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputForm } from '../../../models/input-form';
import { FondosComunesInversionConfiguration } from '../../../configuration/fci/fondos-comunes-inversion-configuration';
import { Form } from "../../../ui/form/form";

@Component({
  selector: 'app-fci-form',
  imports: [ReactiveFormsModule, Form],
  templateUrl: './fci-form.html',
  styleUrl: './fci-form.scss',
})
export class FciForm {
  titulo: string = 'Nuevo FCI';
  fciInputs: InputForm[] = [];

  fciForm = new FormGroup({
    fci_id: new FormControl<number | null>(null),
    nombre: new FormControl<string>('', [Validators.required]),
    clase: new FormControl<string>('', []),
    valorCuotaparte: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    porc_dia: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    porc_mes: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    porc_anno: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    porc_anual: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    porc_honorarios: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    tipo_inversión: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    benchmark: new FormControl<string>('', [Validators.required]),
    moneda: new FormControl<string>('', [Validators.required]),
    horizonte: new FormControl<string>('', [Validators.required]),
    inversion_minima: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    plazo_liquidacion: new FormControl<string>('', [Validators.required]),
    gerente: new FormControl<string>('', [Validators.required]),
  });

  constructor(private fciConfig: FondosComunesInversionConfiguration) {}

  ngOnInit() {
    this.fciInputs = this.fciConfig.fciInputs;
  }

  onSubmit() {
    console.log('onSubmit');
    console.log(this.fciForm.value);
  }
}
