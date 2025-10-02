import { Component, computed } from '@angular/core';
import { CaucionConfiguration } from '../../configuration/caucion/caucion-configuration';
import { BigButton } from "../../ui/big-button/big-button";
import { CaucionService } from '../../services/caucion/caucion-service';
import { ICaucion } from '../../models/DTOs/ICaucion';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SelectedCaucionService } from '../../services/caucion/selected-caucion-service';
import { FechaLiquidacionPipe } from '../../pipes/fecha/fecha-liquidacion/fecha-liquidacion-pipe';
import { GananciaNetaPipe } from '../../pipes/montos/ganancia-neta/ganancia-neta-pipe';
import { DialogService } from '../../services/dialog/dialog';
import { CaucionModal } from '../../components/caucion/caucion-modal/caucion-modal';
import { Table } from "../../ui/table/table";
import { Router } from '@angular/router';

@Component({
  selector: 'app-caucion',
  imports: [BigButton, DatePipe, CurrencyPipe, FechaLiquidacionPipe, GananciaNetaPipe, Table],
  templateUrl: './caucion.html',
  styleUrl: './caucion.scss',
})
export class Caucion {
  protected headers: string[] = [];
  protected cauciones = computed(() => this.caucionSrv.cauciones());

  constructor(
    private caucionConfig: CaucionConfiguration,
    private caucionSrv: CaucionService,
    private selectedCaucionSrv: SelectedCaucionService,
    private dialogSrv: DialogService,
    private router: Router
  ) {
    this.caucionSrv.get_all();
  }

  ngOnInit() {
    this.headers = this.caucionConfig.tablaCaucionHeaders;
  }

  openModal(caucion: ICaucion | null) {
    this.selectedCaucionSrv.caucion.set(caucion);
    this.dialogSrv.open(CaucionModal);
  }
}
