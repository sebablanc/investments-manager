import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ICaucion } from '../../models/DTOs/ICaucion';

@Injectable({
  providedIn: 'root',
})
export class CaucionService {
  private http = inject(HttpClient);
  public cauciones: WritableSignal<ICaucion[]> = signal<ICaucion[]>([]);

  get_all() {
    return this.http
      .get<ICaucion[]>('/api/caucion/', { observe: 'response' })
      .subscribe((value) => this.cauciones.set(value.body || []));
  }

  update(caucion: ICaucion) {
    return this.http.put<ICaucion>(`/api/caucion/${caucion.caucion_id}`, caucion);
  }

  save(caucion: ICaucion) {
    return this.http.post<ICaucion>(`/api/caucion/`, caucion);
  }

  delete(caucion_id: number) {
    return this.http.delete(`/api/caucion/${caucion_id}`);
  }
}
