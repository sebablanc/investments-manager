import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IFci } from '../../models/DTOs/IFci';

@Injectable({
  providedIn: 'root'
})
export class FciService {
  private http = inject(HttpClient);
  public fcis: WritableSignal<IFci[]> = signal<IFci[]>([]);

  get_all() {
    return this.http
      .get<IFci[]>('/api/fci/', { observe: 'response' })
      .subscribe((value) => this.fcis.set(value.body || []));
  }

  update(fci: IFci) {
    return this.http.put<IFci>(`/api/fci/${fci.fci_id}`, fci);
  }

  save(fci: IFci) {
    return this.http.post<IFci>(`/api/fci/`, fci);
  }

  delete(fci_id: number) {
    return this.http.delete(`/api/fci/${fci_id}`);
  }
}
