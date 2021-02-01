import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Servicios
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
               public router: Router) {}

  canActivate(){
    if ( this._usuarioService.estalogueado() ){
      return true;
    } else{
      this.router.navigate(['/login']);
      return false;
    }

  }
}
