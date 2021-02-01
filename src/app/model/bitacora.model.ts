export class Bitacora {

    constructor(
        public idBitacora?: number,
        public idAlerta?: number,
        public nidUserEmi?: number,
        public nidUserRecep?: number,
        public id_action?: number,
        public obs_bta?: string,
        public id_resolution?: number,

        public emisor?: string,
        public perfilEmisor?: string,
        public fecha?: string,
        public hora?: string,
        public desc_action?: string,
        public desc_resolution?: string,
        public statusCaso?: number
    ) {}

}