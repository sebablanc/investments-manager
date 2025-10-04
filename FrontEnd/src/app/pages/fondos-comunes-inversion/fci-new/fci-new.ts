import { Component } from '@angular/core';
import { FciForm } from "../../../components/fci/fci-form/fci-form";
import { DialogService } from '../../../services/dialog/dialog';
import { LoadingService } from '../../../services/loading/loading';
import { IFci } from '../../../models/DTOs/IFci';
import { MessageModal } from '../../../ui/message-modal/message-modal/message-modal';
import { FciService } from '../../../services/fci/fci-service';

@Component({
  selector: 'app-fci-new',
  imports: [FciForm],
  templateUrl: './fci-new.html',
  styleUrl: './fci-new.scss'
})
export class FciNew {

  constructor(protected dialogSrv: DialogService, protected loadingSrv: LoadingService, private fciSrv: FciService) {}

  saveData(fciToSend: IFci) {
    this.loadingSrv.loading.set(true);
    this.dialogSrv.close();
    setTimeout(() => {
      this.procesarResultado('FCI creado correctamente');
      fciToSend.fci_id
        ? this.fciSrv.update(fciToSend).subscribe((_) => {
            this.procesarResultado('FCI actualizado correctamente');
          })
        : this.fciSrv.save(fciToSend).subscribe((_) => {
            this.procesarResultado('FCI creado correctamente');
          });
    }, 1000);
  }

  private procesarResultado(msj: string) {
    this.showMessage('Operación exitosa', msj);
    this.fciSrv.get_all();
  }

  private showMessage(titulo: string, msj: string) {
    this.loadingSrv.loading.set(false);
    this.dialogSrv.close();
    this.dialogSrv.mensaje.set(msj);
    this.dialogSrv.titulo.set(titulo);
    this.dialogSrv.open(MessageModal);
  }
}
