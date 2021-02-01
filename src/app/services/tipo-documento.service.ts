import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';
import { TipoDocumento } from '../model/tipodocumento.model';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  loading: boolean = false;
  paginaActual: number = 1;
  tiposDocumento: TipoDocumento[] = [];

  constructor(public http: HttpClient) { }

  listarTipoDocumento(){
    let url;
    url = URL_SERVICIOS + '/TipoDocumento/listar';
    this.paginaActual = 1;
    this.loading = true;
    // GET
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        this.tiposDocumento = resp.data;
        return resp.data;
      })
    );
  }

  traerTipoDocumento( id: number ){
    return this.tiposDocumento.find( x => x.tipo_documento_id === Number(id) );
  }

  guardarTipoDocumento( tipoDocumento: TipoDocumento){
    let url;

    if ( tipoDocumento.tipo_documento_id > 0 ){
      this.loading = true;
      url = URL_SERVICIOS + '/TipoDocumento/actualizar/' + tipoDocumento.tipo_documento_id;
      // PUT
      return this.http.put( url, tipoDocumento ).pipe(
        map( (resp: any) => {
          this.loading = false;
          Swal.fire({
            title: 'Tipo Documento actualizado',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'success'
          });
          return resp;
        }),
        catchError(err => {
          this.loading = false;
          Swal.fire({
            title: 'Oops...',
            text: 'Problemas al actualizar el Tipo Documento',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error'
          });
          return throwError(err);
        }));
    }else{
      this.loading = true;
      url = URL_SERVICIOS + '/TipoDocumento/insertar';
      // POST
      return this.http.post( url, tipoDocumento ).pipe(
        map( (resp: any) => {
          this.loading = false;
          Swal.fire({
            title: 'Tipo Documento registrado',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'success'
          });
          return resp;
        }),
        catchError(err => {
          this.loading = false;
          Swal.fire({
            title: 'Oops...',
            text: 'Problemas al insertar el Tipo Documento',
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
}
