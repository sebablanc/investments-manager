import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputForm } from '../../../models/input-form';
import { FondosComunesInversionConfiguration } from '../../../configuration/fci/fondos-comunes-inversion-configuration';
import { Form } from "../../../ui/form/form";
import { IFci } from '../../../models/DTOs/IFci';
import { FciUtils } from '../../../utils/FciUtils';
import { SIMBOLO_MONEDA } from '../../../consts/moneda.const';
import { CalculatorUtils } from '../../../utils/CalculatorUtils';
import { SelectedFciService } from '../../../services/fci/selected-fci-service';

@Component({
  selector: 'app-fci-form',
  imports: [ReactiveFormsModule, Form],
  templateUrl: './fci-form.html',
  styleUrl: './fci-form.scss',
})
export class FciForm {
  data = output<IFci>();
  cancelClicked = output();
  deleteClicked = output();
  
  titulo: string = 'Nuevo FCI';
  fciInputs: InputForm[] = [];
  fci: IFci | null = null;
  simbolo_moneda: string = '';
  proyeccion_por_dia: number = 0;
  proyeccion_por_mes: number = 0;
  proyeccion_por_anno: number = 0;

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
    tipo_inversion: new FormControl<string>('', [Validators.required]),
    benchmark: new FormControl<string>('', [Validators.required]),
    moneda: new FormControl<string>('', [Validators.required]),
    horizonte: new FormControl<string>('', [Validators.required]),
    inversion_minima: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    plazo_liquidacion: new FormControl<string>('', [Validators.required]),
    gerente: new FormControl<string>('', [Validators.required]),
  });

  constructor(private fciConfig: FondosComunesInversionConfiguration, private selectedFciSrv: SelectedFciService) {}

  ngOnInit() {
    this.fciInputs = this.fciConfig.fciInputs;
    this.fci = this.selectedFciSrv.fci();

    this.fciForm.controls.moneda.valueChanges.subscribe(value => {
      if(value) this.simbolo_moneda = SIMBOLO_MONEDA[value];
    });

    this.fciForm.controls.porc_dia.valueChanges.subscribe(value => {
      if(value) this.proyeccion_por_dia = CalculatorUtils.calcularPorcentaje(100, value);
    });

    this.fciForm.controls.porc_mes.valueChanges.subscribe(value => {
      if(value) this.proyeccion_por_mes = CalculatorUtils.calcularPorcentaje(100, value);
    });

    this.fciForm.controls.porc_anno.valueChanges.subscribe(value => {
      if(value) this.proyeccion_por_anno = CalculatorUtils.calcularPorcentaje(100, value);
    });

    if (this.fci) {
      this.titulo = 'Modificar FCI';
      this.fillForm();
    }
    
  }

  private fillForm() {
    this.fciForm.patchValue({
      ...this.fci
    });
  }

  onSubmit() {
    this.data.emit(FciUtils.parseFormToIFci(this.fciForm));
  }
}
