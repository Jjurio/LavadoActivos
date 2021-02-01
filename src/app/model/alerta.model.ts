export class Alerta {

    constructor(
        public customerID?: number,
        public code?: string,
        public description?: string,
        public id?: string,
        public reportNumber?: string,
        public rosNumber?: number,
        public reportDate?: string,
        public status?: string,
    ) {}

}