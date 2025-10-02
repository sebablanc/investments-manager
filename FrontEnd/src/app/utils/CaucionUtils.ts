import { FormGroup } from "@angular/forms";
import { ICaucion } from "../models/DTOs/ICaucion";

export class CaucionUtils {
    static parseFormToICaucion(form: FormGroup): ICaucion {
       return {
         comision: form.controls['comision']?.value || 0,
         derecho_mercado: form.controls['derecho_mercado']?.value || 0,
         dias: form.controls['dias']?.value || 0,
         fecha: form.controls['fecha']?.value || new Date(),
         monto: form.controls['monto']?.value || 0,
         tna: form.controls['tna']?.value || 0,
         caucion_id: form.controls['caucion_id']?.value || undefined
       };
    }
  }
