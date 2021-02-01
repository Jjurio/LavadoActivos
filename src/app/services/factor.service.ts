import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Factor } from '../model/factor.model';

@Injectable({
  providedIn: 'root'
})
export class FactorService {

  loading: boolean = false;
  paginaActual: number = 1;

  constructor(public http: HttpClient) { }

  listarFactor(){
    let url;
    url = URL_SERVICIOS + '/Factor/listar';
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
