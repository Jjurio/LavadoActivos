import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';
import { Bitacora } from '../model/bitacora.model';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  loading: boolean = false;

  constructor(public http: HttpClient) { }

  listarAlertas(usuario_id: number) {
    let url;
    url = URL_SERVICIOS + '/Alerta/Listar?usuario_id=' + usuario_id;
    this.loading = true;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }

  traerAlerta(customerID: number) {
    let url;
    url = URL_SERVICIOS + '/Alerta/Traer?customerID=' + customerID;
    this.loading = true;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }

  listarBitacora(idAlerta: number) {
    let url;
    console.log(idAlerta)
    url = URL_SERVICIOS + '/Bitacora/Listar?idAlerta=' + idAlerta;
    this.loading = true;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }

  traerUtimaBitacora(idAlerta: number) {
    let url;
    url = URL_SERVICIOS + '/Bitacora/Traer?idAlerta=' + idAlerta;
    this.loading = true;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }

  insertarBitacora(bitacora: Bitacora) {
    let url;
    url = URL_SERVICIOS + '/Bitacora/Insertar';
    this.loading = true;
    // POST
    return this.http.post( url, bitacora ).pipe(
        map( (resp: any) => {
          this.loading = false;
          Swal.fire({
            title: 'Movimiento registrado',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'success'
          });
          return resp.data;
        }),
        catchError(err => {
          this.loading = false;
          Swal.fire({
            title: 'Oops...',
            text: 'Problemas al insertar movimiento',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error'
          });
          return throwError(err);
        }));
  }
}
