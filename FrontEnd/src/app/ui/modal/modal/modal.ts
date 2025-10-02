import { Component } from '@angular/core';
import { IModal } from '../../../models/iModal';
import { DialogService } from '../../../services/dialog/dialog';
import { LoadingService } from '../../../services/loading/loading';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements IModal {
  mensaje: string = 'Mensaje';
  titulo: string = 'Titulo';

  constructor(protected dialogSrv: DialogService, protected loadingSrv: LoadingService) {}

  ngOnInit() {
    this.mensaje = this.dialogSrv.mensaje();
    this.titulo = this.dialogSrv.titulo();
  }

  close() {
    this.dialogSrv.close();
  }
}
