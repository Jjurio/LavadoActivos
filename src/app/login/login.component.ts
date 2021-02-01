import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';
import { UsuarioService } from '../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor( public router: Router,
               public _usuarioService: UsuarioService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    init_plugins();
  }

  crearFormulario(){
    this.forma = new FormGroup({
      usuario: new FormControl( null, Validators.required, ),
      password: new FormControl( null, Validators.required, )
    });
  }

  ingresar() {
    // Validar formulario
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls).forEach( control => {
        control.markAsTouched();
      });
    }

    // Setear BODY
    let usuario = new Usuario();
    usuario.vuser = this.forma.value.usuario;
    usuario.vpassword = this.forma.value.password;

    // Servicio LOGIN
    this._usuarioService.login( usuario )
    .subscribe( (resp: any) => {
      if (resp.isSuccess) {
        this.router.navigate(['/alertas']);
      }
    });
  }

}
