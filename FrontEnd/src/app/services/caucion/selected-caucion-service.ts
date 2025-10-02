import { Injectable, signal } from "@angular/core";
import { ICaucion } from "../../models/DTOs/ICaucion";

@Injectable({
  providedIn: 'root',
})
export class SelectedCaucionService {
  caucion = signal<ICaucion | null>(null);
}
