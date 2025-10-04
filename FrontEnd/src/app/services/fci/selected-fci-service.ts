import { Injectable, signal } from "@angular/core";
import { IFci } from "../../models/DTOs/IFci";

@Injectable({
  providedIn: 'root',
})
export class SelectedFciService {
  fci = signal<IFci | null>(null);
}
