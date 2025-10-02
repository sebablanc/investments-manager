import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {
  titulo = signal<string>('Titulo');
  mensaje = signal<string>('mensaje');
}
