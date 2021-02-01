export class CondicionCliente {

    constructor(
        public condicion_cliente_id?: number,
        public descripcion?: string,
        public tipo_ponderacion_id?: number,
        public tipo_ponderacion?: string,
        public ponderacion?: string,
    ) {}

}