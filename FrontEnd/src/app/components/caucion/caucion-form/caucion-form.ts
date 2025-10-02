import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateUtils } from '../../../utils/DateUtils';
import { InputForm } from '../../../models/input-form';
import { CaucionConfiguration } from '../../../configuration/caucion/caucion-configuration';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CalculatorUtils } from '../../../utils/CalculatorUtils';
import { ICaucion } from '../../../models/DTOs/ICaucion';
import { SelectedCaucionService } from '../../../services/caucion/selected-caucion-service';
import { CaucionUtils } from '../../../utils/CaucionUtils';
import { Form } from "../../../ui/form/form";
@Component({
  selector: 'app-caucion-form',
  imports: [ReactiveFormsModule, CurrencyPipe, DatePipe, Form],
  templateUrl: './caucion-form.html',
  styleUrl: './caucion-form.scss',
})
export class CaucionForm {
  cancelClicked = output();
  deleteClicked = output();
  data = output<ICaucion>();
  caucion: ICaucion | null = null;
  titulo: string = 'Nueva caución';

  caucionInputs: InputForm[] = [];
  importeBruto: number = 0;
  importeComision: number = 0;
  importeDerechoMercado: number = 0;
  importeIVA: number = 0;
  importeNetoReal: number = 0;
  importeGananciaNetaReal: number = 0;
  fechaLiquidacion: Date = new Date();

  caucionForm = new FormGroup({
    caucion_id: new FormControl<number | null>(null),
    fecha: new FormControl<Date>(new Date(), [Validators.required]),
    monto: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    tna: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    comision: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    dias: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    derecho_mercado: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
  });

  constructor(
    private caucionConfig: CaucionConfiguration,
    private selectedCaucionSrv: SelectedCaucionService
  ) {}

  ngOnInit() {
    this.caucionInputs = this.caucionConfig.caucionInputs;
    this.caucion = this.selectedCaucionSrv.caucion();

    if (this.caucion) {
      this.titulo = 'Modificar caución';
      this.fillForm();
      this.calcularMontos();
    }

    this.caucionForm.valueChanges.subscribe(() => {
      this.calcularMontos();
    });
  }

  private calcularMontos() {
    this.calcularImporteBruto();
    this.calcularImporteComision();
    this.calcularImporteDerechoMercado();
    this.calcularImporteIVA();
    this.calcularImporteNetoReal();
    this.calcularImporteGananciaNetaReal();
    this.calcularFechaLiquidacion();
  }

  private fillForm() {
    this.caucionForm.patchValue({
      ...this.caucion,
      caucion_id: this.caucion?.caucion_id
    });
  }

  get monto() {
    return this.caucionForm.controls.monto;
  }

  get tna() {
    return this.caucionForm.controls.tna;
  }

  get dias() {
    return this.caucionForm.controls.dias;
  }

  get comision() {
    return this.caucionForm.controls.comision;
  }

  get derechoMercado() {
    return this.caucionForm.controls.derecho_mercado;
  }

  get fecha() {
    return this.caucionForm.controls.fecha;
  }

  get id() {
    return this.caucionForm.controls.caucion_id;
  }

  private calcularImporteBruto() {
    this.importeBruto = CalculatorUtils.montoResultanteTNA(
      this.monto.value || 0,
      this.tna.value || 0,
      this.dias.value || 1
    );
  }

  private calcularImporteComision() {
    this.importeComision = CalculatorUtils.calcularPorcentajePorDia(
      this.monto.value || 0,
      this.comision.value || 0,
      this.dias.value || 1
    );
  }

  private calcularImporteDerechoMercado() {
    this.importeDerechoMercado = CalculatorUtils.calcularDerechoMercado(
      this.monto.value || 0,
      this.derechoMercado.value || 0,
      this.dias.value || 1
    );
  }

  private calcularImporteIVA() {
    let total = this.importeComision + this.importeDerechoMercado;
    this.importeIVA = CalculatorUtils.calcularIVA(total);
  }

  private calcularImporteNetoReal() {
    this.importeNetoReal =
      this.importeBruto - this.importeComision - this.importeDerechoMercado - this.importeIVA;
  }

  private calcularImporteGananciaNetaReal() {
    this.importeGananciaNetaReal = this.importeNetoReal - (this.monto.value || 0);
  }

  private calcularFechaLiquidacion() {
    if (!this.fecha.value) return;
    this.fechaLiquidacion = DateUtils.addDays(this.fecha.value, {
      days: this.dias.value || 1,
    });
  }

  onSubmit() {
    this.data.emit(CaucionUtils.parseFormToICaucion(this.caucionForm));
  }
}
