import { Component, computed } from '@angular/core';
import { Table } from '../../ui/table/table';
import { FondosComunesInversionConfiguration } from '../../configuration/fci/fondos-comunes-inversion-configuration';
import { BigButton } from '../../ui/big-button/big-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fondos-comunes-inversion',
  imports: [Table, BigButton],
  templateUrl: './fondos-comunes-inversion.html',
  styleUrl: './fondos-comunes-inversion.scss',
})
export class FondosComunesInversion {
  protected headers: string[] = [];
  //computed(() => this.caucionSrv.cauciones());
  protected fondos = computed(() => []);

  constructor(
    private fciConfig: FondosComunesInversionConfiguration, //private fciSrv: FondosComunesInversionService, //private selectedCaucionSrv: SelectedCaucionService,
    private router: Router
  ) {
    //this.caucionSrv.get_all();
  }

  ngOnInit() {
    this.headers = this.fciConfig.tablaFciHeaders;
  }

  goTo() {
    this.router.navigateByUrl('/fci/new')
  }
}
