import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, delay, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PonderacionService {

  loading: boolean = false;

  constructor( public http: HttpClient) { }

  listarPonderacion(){
    let url;
    url = URL_SERVICIOS + '/SubFactor/listar';
    this.loading = true;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.loading = false;
        return resp.data;
      })
    );
  }
}
