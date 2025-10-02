import { Component, inject } from '@angular/core';
import { CaucionForm } from '../caucion-form/caucion-form';
import { Modal } from '../../../ui/modal/modal/modal';
import { ICaucion } from '../../../models/DTOs/ICaucion';
import { CaucionService } from '../../../services/caucion/caucion-service';
import { MessageModal } from '../../../ui/message-modal/message-modal/message-modal';
import { SelectedCaucionService } from '../../../services/caucion/selected-caucion-service';

@Component({
  selector: 'app-caucion-modal',
  imports: [CaucionForm],
  templateUrl: './caucion-modal.html',
  styleUrl: './caucion-modal.scss',
})
export class CaucionModal extends Modal {
  private caucionSrv = inject(CaucionService);
  private selectedCaucionSrv = inject(SelectedCaucionService);

  saveData(caucionToSend: ICaucion) {
    this.loadingSrv.loading.set(true);
    this.dialogSrv.close();
    setTimeout(() => {
      caucionToSend.caucion_id
        ? this.caucionSrv.update(caucionToSend).subscribe((_) => {
            this.procesarResultado('Caución actualizada correctamente');
          })
        : this.caucionSrv.save(caucionToSend).subscribe((_) => {
            this.procesarResultado('Caución creada correctamente');
          });
    }, 1000);
  }

  private procesarResultado(msj: string) {
    this.showMessage('Operación exitosa', msj);
    this.caucionSrv.get_all();
  }

  private showMessage(titulo: string, msj: string) {
    this.loadingSrv.loading.set(false);
    this.dialogSrv.close();
    this.dialogSrv.mensaje.set(msj);
    this.dialogSrv.titulo.set(titulo);
    this.dialogSrv.open(MessageModal);
  }

  deleteCaucion() {
    this.loadingSrv.loading.set(true);
    let caucion = this.selectedCaucionSrv.caucion();
    if (!caucion || !caucion.caucion_id) {
      this.showMessage('¡Lo lamentamos!', 'La caución seleccionada no se puede eliminar');
      return;
    }
    this.dialogSrv.close();

    this.caucionSrv.delete(caucion.caucion_id).subscribe(() => this.procesarResultado('Caución eliminada correctamente'));
  }
}
