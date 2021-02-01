export class TipoDocumento {

    constructor(
        public tipo_documento_id?: number,
        public subfactor_id?: number,
        public subfactor?: string,
        public descripcion?: string,
        public ponderacion?: string,
    ) {}

}