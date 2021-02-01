export class Cliente {

    constructor(
        public cliente_id?: number,
        public empresa_id?: number,
        public descripcion?: number,
        public tipo_documento?: string,
        public numero_documento?: string,
        public nacionalidad?: string,
        public provincia?: string,
        public condicion_cliente?: string,
        public tipo_cliente?: string,
        public condicion_juridica?: string,
        public estado_contribuyente?: string,
        public condicion_tributaria?: string,
        public condicion_laboral?: string,
        public rango_etario?: string,
        public antiguedad_cliente?: string,
        public antiguedad_juridica?: string,
        public tipo_operacion?: string,
        public beneficiario_final?: string,
        public ejecutante?: string,
        public canal?: string,
    ) {}

}