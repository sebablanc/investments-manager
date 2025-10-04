import { Component, computed } from '@angular/core';
import { Table } from '../../ui/table/table';
import { FondosComunesInversionConfiguration } from '../../configuration/fci/fondos-comunes-inversion-configuration';
import { BigButton } from '../../ui/big-button/big-button';
import { Router } from '@angular/router';
import { FciService } from '../../services/fci/fci-service';
import { CurrencyPipe } from '@angular/common';
import { TipoInversionPipe } from '../../pipes/tipo_inversion/tipo-inversion-pipe';
import { HorizontePipe } from '../../pipes/horizonte/horizonte-pipe';
import { IFci } from '../../models/DTOs/IFci';
import { SelectedFciService } from '../../services/fci/selected-fci-service';

@Component({
  selector: 'app-fondos-comunes-inversion',
  imports: [Table, BigButton, CurrencyPipe, TipoInversionPipe, HorizontePipe],
  templateUrl: './fondos-comunes-inversion.html',
  styleUrl: './fondos-comunes-inversion.scss',
})
export class FondosComunesInversion {
  protected headers: string[] = [];
  protected fondos = computed(() => this.fciSrv.fcis());

  constructor(
    private fciConfig: FondosComunesInversionConfiguration,
    private selectedFciSrv: SelectedFciService,
    private fciSrv: FciService,
    private router: Router
  ) {
    this.fciSrv.get_all();
  }

  ngOnInit() {
    this.headers = this.fciConfig.tablaFciHeaders;
  }

  goTo() {
    this.router.navigateByUrl('/fci/new')
  }

  modifyCaucion(fci: IFci | null) {
    this.selectedFciSrv.fci.set(fci);
    this.goTo();
  }
}
