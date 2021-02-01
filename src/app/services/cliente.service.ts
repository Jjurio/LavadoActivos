import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';
import { Cliente } from '../model/cliente.model';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  loading: boolean = false;
  paginaActual: number = 1;

  constructor(public http: HttpClient) { }

  listarClientes(descripcion: string, numero_documento: string){
    let url;
    url = URL_SERVICIOS + '/Cliente/listar?descripcion=' + descripcion + '&numeroDocumento=' + numero_documento;
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

  insertarCliente(cliente: Cliente[] = []) {
    let url;
    url = URL_SERVICIOS + '/Cliente/Importar';
    this.loading = true;
    // POST
    console.log(cliente)
    return this.http.post( url, cliente).pipe(
        map( (resp: any) => {
          this.loading = false;
          return resp.data;
        }),
        catchError(err => {
          this.loading = false;
          return throwError(err);
        }));
  }
}
