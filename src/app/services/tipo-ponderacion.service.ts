import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { TipoPonderacion } from '../model/tipoponderacion.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPonderacionService {

  loading: boolean = false;
  paginaActual: number = 1;
  tiposPonderacion: TipoPonderacion[] = [];

  constructor(public http: HttpClient) { }

  listarTipoPonderacion(){
    let url;
    url = URL_SERVICIOS + '/TipoPonderacion/listar';
    this.paginaActual = 1;
    this.loading = true;
    // GET
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        this.tiposPonderacion = resp.data;
        return resp.data;
      })
    );
  }
}
