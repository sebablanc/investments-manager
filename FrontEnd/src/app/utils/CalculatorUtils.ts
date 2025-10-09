const PORCENTAJE_IVA = 0.21;
const DIAS_ANIO = 365;
const PORCENTAJE_TOTAL = 100;
const DIAS_DERECHO_MERCADO = 90;

export class CalculatorUtils {
    static montoResultanteTNA(monto: number, tna: number, dias: number) {
        let tnaPorDia = tna / (DIAS_ANIO * PORCENTAJE_TOTAL)
        return monto * (1 + tnaPorDia * dias)
    }

    static calcularPorcentajePorDia(monto: number, porcentaje: number, dias: number) {
        let porcentajePorDia = porcentaje / (DIAS_ANIO * PORCENTAJE_TOTAL)
        return monto * (porcentajePorDia * dias)
    }

    static calcularDerechoMercado(monto: number, porcentaje: number, dias: number) {
        let porcentajePorDia = porcentaje / (DIAS_DERECHO_MERCADO * PORCENTAJE_TOTAL)
        return monto * (porcentajePorDia * dias)
    }

    static calcularIVA(monto: number) {
        return monto * PORCENTAJE_IVA
    }

    static calcularMontoConPorcentaje(monto: number, porcentaje: number){
        return monto + this.calcularPorcentaje(monto, porcentaje);
    }

    static calcularPorcentaje(monto: number, porcentaje: number) {
        return monto * porcentaje;
    }
}