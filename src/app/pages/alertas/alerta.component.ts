import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AlertaService } from 'src/app/services/alerta.service';
import { Alerta } from 'src/app/model/alerta.model';
import { UsuarioService } from '../../services/usuario.service';
import { Bitacora } from '../../model/bitacora.model';
import { Usuario } from '../../model/usuario.model';


declare function init_plugins();

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: []
})
export class AlertaComponent implements OnInit {

  @ViewChild('open_modal_asignado') private open_modal_asignado: ElementRef;
  @ViewChild('cerrar_modal_asignado') private cerrar_modal_asignado: ElementRef;
  @ViewChild('cerrar_modal_seleccionar_analista') private cerrar_modal_seleccionar_analista: ElementRef;
  
  formaAsignado: FormGroup;
  formaPorCalificar: FormGroup;
  alerta: Alerta;
  bitacora: Bitacora[] = [];
  registroBitacora: Bitacora;
  usuarios: Usuario[] = [];
  analista_seleccionado: Usuario;
  accion_elegida: boolean = false;

  constructor( public activatedRoute: ActivatedRoute,
               public _alertaService: AlertaService,
               public _usuarioService: UsuarioService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    init_plugins();
    // Recibir parametro de la URL
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if ( id !== 'nuevo' ){
        this.traerAlerta(id);
      }
    });
    console.log(this.registroBitacora)
  }

  crearFormulario(){
    this.formaAsignado = new FormGroup({
      accion: new FormControl( '' , Validators.required, ),
      comentarios: new FormControl( '' , Validators.required, ),
      analista: new FormControl( '' , Validators.required, ),
    });

    this.formaPorCalificar = new FormGroup({
      respuesta: new FormControl( '' , Validators.required, ),
      accion: new FormControl( '' , Validators.required, ),
      comentarios: new FormControl( '' , Validators.required, ),
      
    });
  }

  campoNoValido(campo: string) {
    return this.formaAsignado.get(campo).invalid && this.formaAsignado.get(campo).touched;
  }

  campoNoValidoPorCalificar(campo: string) {
    return this.formaPorCalificar.get(campo).invalid && this.formaPorCalificar.get(campo).touched;
  }

  cerrarModalAsignado() {
    this.cerrar_modal_asignado.nativeElement.click();
  }

  cerrarModalAnalista() {
    this.cerrar_modal_seleccionar_analista.nativeElement.click();
    this.open_modal_asignado.nativeElement.click();
  }

  traerAlerta( id: number){
    // Servicio CARGAR TRAER ALERTA
    this._alertaService.traerAlerta(id)
    .subscribe( (resp: any) => {
      this.alerta = resp;
      this.listarBitacora(this.alerta.customerID);
    });
  }

  listarBitacora(idAlerta: number) {
    // Servicio LISTAR BITACORA
    this._alertaService.listarBitacora(idAlerta)
    .subscribe( (resp: any) => {
      this.bitacora = resp;
    });
  }

  asignarAlerta() {
    // Setear BODY
    let bitacora = new Bitacora;
    bitacora.idAlerta = this.alerta.customerID;
    bitacora.nidUserEmi = this._usuarioService.usuario.nidUser;
    // Asignado a si mismo
    bitacora.nidUserRecep = 1;
    // Id Accion -> Asignado
    bitacora.id_action = 1;
    bitacora.obs_bta = '';
    // Sin resolucion
    bitacora.id_resolution = 0;
    // Cambio de estado -> ASIGNADO
    bitacora.statusCaso = 2;

    this._alertaService.insertarBitacora( bitacora )
    .subscribe( (resp: any) => {
      this.alerta = resp;
      this.listarBitacora(this.alerta.customerID);
    });
  }

  seleccionarAccion(accion: string) {
    this.accion_elegida = true;
    this.formaAsignado.patchValue({
      accion: accion
    });
  }

  openModalAnalista() {
    this.cerrarModalAsignado();
    // Listar Usuarios Perfil Analista(1)
    this._usuarioService.listarUsuarios(1)
    .subscribe( (resp: any) => {
      this.usuarios = resp;
    });
  }

  seleccionarAnalista(usuario: Usuario) {
    this.formaAsignado.patchValue({
      analista: usuario.vnombres + ' ' + usuario.vpaterno + ' ' + usuario.vmaterno
    });
    this.analista_seleccionado = usuario;
    this.cerrarModalAnalista();
  }

  enviarPorCalificar() {
    // Validar formulario
    if ( this.formaAsignado.invalid) {
      return Object.values( this.formaAsignado.controls).forEach( control => {
        control.markAsTouched();
      });
    }

    // Setear BODY
    let bitacora = new Bitacora;
    bitacora.idAlerta = this.alerta.customerID;
    bitacora.nidUserEmi = this._usuarioService.usuario.nidUser;
    // Asignado al Analista Seleccionado
    bitacora.nidUserRecep = this.analista_seleccionado.nidUser;
    // Id Accion -> Derivado
    bitacora.id_action = 2;
    bitacora.obs_bta = this.formaAsignado.value.comentarios;
    // Accion Seleccionada
    if (this.formaAsignado.value.accion === 'ARCHIVO') {
      bitacora.id_resolution = 1;
    }
    else if (this.formaAsignado.value.accion === 'SEGUIMIENTO') {
      bitacora.id_resolution = 2;
    }
    else if (this.formaAsignado.value.accion === 'ANALISIS') {
      bitacora.id_resolution = 3;
    } else {
      bitacora.id_resolution = 0;
    }
    // Cambio de estado -> POR CALIFICAR
    bitacora.statusCaso = 3;

    this._alertaService.insertarBitacora( bitacora )
    .subscribe( (resp: any) => {
      this.alerta = resp;
      this.listarBitacora(this.alerta.customerID);
      this.cerrarModalAsignado();
    });
  }

  traerUltimaBitacora() {
    // Servicio CARGAR TRAER BITACORA
    this._alertaService.traerUtimaBitacora(this.alerta.customerID)
    .subscribe( (resp: any) => {
      this.registroBitacora = resp;
      console.log(resp)  
    });
  }

  enviarPorResolver() {
    // Validar formulario
    if ( this.formaPorCalificar.invalid) {
      return Object.values( this.formaPorCalificar.controls).forEach( control => {
        control.markAsTouched();
      });
    }
  }

}
