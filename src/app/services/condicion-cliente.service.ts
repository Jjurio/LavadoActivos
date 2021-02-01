import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { CondicionCliente } from '../model/condicioncliente';

@Injectable({
  providedIn: 'root'
})
export class CondicionClienteService {

  loading: boolean = false;
  paginaActual: number = 1;

  constructor( public http: HttpClient) { }

  listarCondicionCliente(){
    let url;
    url = URL_SERVICIOS + '/CondicionCliente/listar';
    this.paginaActual = 1;
    this.loading = true;
    // GET
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }
}
