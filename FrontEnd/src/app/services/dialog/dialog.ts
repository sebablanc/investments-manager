import { inject, Injectable, signal } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Modal } from '../../ui/modal/modal/modal';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(Dialog);
  private dialogOpened: DialogRef<unknown, Modal> | null = null;
  titulo = signal<string>('Titulo');
  mensaje = signal<string>('mensaje');

  open(modal: ComponentType<Modal>) {
    this.dialogOpened = this.dialog.open(modal);
  }

  close() {
    this.dialogOpened?.close();
  }
}
