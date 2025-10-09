import { Component } from '@angular/core';
import { FciForm } from "../../../components/fci/fci-form/fci-form";
import { DialogService } from '../../../services/dialog/dialog';
import { LoadingService } from '../../../services/loading/loading';
import { IFci } from '../../../models/DTOs/IFci';
import { MessageModal } from '../../../ui/message-modal/message-modal/message-modal';
import { FciService } from '../../../services/fci/fci-service';
import { Router } from '@angular/router';
import { SelectedFciService } from '../../../services/fci/selected-fci-service';

@Component({
  selector: 'app-fci-new',
  imports: [FciForm],
  templateUrl: './fci-new.html',
  styleUrl: './fci-new.scss'
})
export class FciNew {

  constructor(protected dialogSrv: DialogService, protected loadingSrv: LoadingService,
    private fciSrv: FciService, private router: Router, private selectedFciSrv: SelectedFciService) {}

  saveData(fciToSend: IFci) {
    this.loadingSrv.loading.set(true);
    this.dialogSrv.close();
    setTimeout(() => {
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
    this.goToFCI();
  }

  protected goToFCI() {
    this.selectedFciSrv.fci.set(null);
    this.router.navigateByUrl('/fci');
  }

  private showMessage(titulo: string, msj: string) {
    this.loadingSrv.loading.set(false);
    this.dialogSrv.close();
    this.dialogSrv.mensaje.set(msj);
    this.dialogSrv.titulo.set(titulo);
    this.dialogSrv.open(MessageModal);
  }

  deleteFci() {
    this.loadingSrv.loading.set(true);
    let fci: IFci | null = this.selectedFciSrv.fci();
    if (!fci || !fci.fci_id) {
      this.showMessage('¡Lo lamentamos!', 'El Fondo seleccionado no se puede eliminar');
      return;
    }
    this.dialogSrv.close();

    this.fciSrv.delete(fci.fci_id).subscribe(() => this.procesarResultado('FCI eliminado correctamente'));
  }
}
