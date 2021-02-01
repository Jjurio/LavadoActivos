import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { URL_SERVICIOS } from '../config/config';

import { Usuario } from '../model/usuario.model';

import { map, delay, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  loading: boolean = false;

  constructor( public http: HttpClient,
               public router: Router) {
    this.cargarStorage();
  }

  estalogueado(){
    return ( this.usuario.vuser.length > 0 ) ? true : false;
  }

  cargarStorage() {
    if ( localStorage.getItem('usuario'))  {
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.limpiarAcceso();
    }
  }

  limpiarAcceso() {
    localStorage.removeItem('usuario');
    this.usuario = null;
}

  guardarStorage( usuario: Usuario ) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
  }

  login( usuario: Usuario){
    let url;
    url = URL_SERVICIOS + '/Login/Login';
    this.loading = true;

    // POST
    return this.http.post( url, usuario ).pipe(
      map( (resp: any) => {
        if (resp.isSuccess) {
          this.guardarStorage ( resp.data );
          this.loading = false;
        } else {
          this.loading = false;
          Swal.fire({
            text: 'Usuario o Contraseña incorrecto(s)',
            width: 350,
            padding: 15,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false,
            icon: 'error'
          });
        }
        return resp;
      }),
      catchError(err => {
        this.loading = false;
        Swal.fire({
          text: 'Usuario o Contraseña incorrecto(s)',
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

  listarUsuarios( nidPerfil: number ){
    let url;
    url = URL_SERVICIOS + '/Usuario/Listar?nidPerfil=' + nidPerfil;
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
