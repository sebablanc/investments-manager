import { FormGroup } from "@angular/forms";
import { IFci } from "../models/DTOs/IFci";

export class FciUtils {
    static parseFormToIFci(form: FormGroup): IFci {
       return {
        fci_id: form.controls['fci_id']?.value || undefined,
        nombre: form.controls['nombre']?.value || undefined,
        clase: form.controls['clase']?.value || undefined,
        valor_cuotaparte: form.controls['valorCuotaparte']?.value || 0,
        porc_dia: form.controls['porc_dia']?.value || 0,
        porc_mes: form.controls['porc_mes']?.value || 0,
        porc_anno: form.controls['porc_anno']?.value || 0,
        porc_anual: form.controls['porc_anual']?.value || 0,
        porc_honorarios: form.controls['porc_honorarios']?.value || 0,
        tipo_inversion: form.controls['tipo_inversion']?.value || undefined,
        benchmark: form.controls['benchmark']?.value || undefined,
        moneda: form.controls['moneda']?.value || undefined,
        horizonte: form.controls['horizonte']?.value || undefined,
        inversion_minima: form.controls['inversion_minima']?.value || 0,
        plazo_liquidacion: form.controls['plazo_liquidacion']?.value || undefined,
        gerente: form.controls['gerente']?.value || undefined
       };
    }
  }
