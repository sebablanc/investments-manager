export interface IFci {
  fci_id?: number;
  nombre: string;
  clase: string;
  valor_cuotaparte: number;
  porc_dia: number;
  porc_mes: number;
  porc_anno: number;
  porc_anual: number;
  porc_honorarios: number;
  tipo_inversion: string;
  benchmark: string;
  moneda: string;
  horizonte: string;
  inversion_minima: number;
  plazo_liquidacion: string;
  gerente: string;
}
