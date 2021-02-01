import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TipoDocumento } from 'src/app/model/tipodocumento.model';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoPonderacion } from 'src/app/model/tipoponderacion.model';
import { Factor } from 'src/app/model/factor.model';
import { FactorService } from 'src/app/services/factor.service';
import { TipoPonderacionService } from 'src/app/services/tipo-ponderacion.service';

declare function init_plugins();

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: []
})
export class TipoDocumentoComponent implements OnInit {

  forma: FormGroup;
  tipoDocumento: TipoDocumento;
  tiposPonderacion: TipoPonderacion[] = [];
  factores: Factor[] = [];
  titulo: string = 'Registro de Tipo Documento';

  constructor( public _tipoDocumentoService: TipoDocumentoService,
               public _factorService: FactorService,
               public _tipoPonderacionService: TipoPonderacionService,
               public router: Router,
               public activatedRoute: ActivatedRoute) {
    this.crearFormulario();
    this.cargarFactor();
    this.cargarTipoPonderacion();
  }

  ngOnInit(): void {
    init_plugins();
    // Recibir parametro de la URL
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id !== 'nuevo' ){
        this.titulo = 'Actualización de Tipo Documento';
        this.traerTipoDocumento(id);
      }
    });
  }

  crearFormulario(){
    this.forma = new FormGroup({
      subfactor_id: new FormControl( 0 , Validators.required, ),
      descripcion: new FormControl( '', Validators.required ),
      ponderacion: new FormControl( '', Validators.required )
    });
  }

  campoNoValido(campo: string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  comboNoValido(campo: string) {
    if ( (this.forma.get(campo).value === 0 || this.forma.get(campo).value === '0') && this.forma.get(campo).touched ){
      return true;
    }else{
      return false;
    }
  }

  cargarFactor(){
    // Servicio CARGAR FACTOR
    this._factorService.listarFactor()
      .subscribe( (resp: any) => {
        this.factores = resp;
        this.factores.unshift({descripcion : '(Seleccione)', factor_id: 0});
      });
  }

  cargarTipoPonderacion(){
    // Servicio CARGAR TIPO PONDERACION
    this._tipoPonderacionService.listarTipoPonderacion()
      .subscribe( (resp: any) => {
        this.tiposPonderacion = resp;
        this.tiposPonderacion.unshift({descripcion : '(Seleccione)', tipo_ponderacion_id: 0});
      });
  }

  traerTipoDocumento( id: number){
    // Servicio TRAER TIPO DOCUMENTO
    this.tipoDocumento = this._tipoDocumentoService.traerTipoDocumento(id);
    this.forma.reset({
      subfactor_id: this.tipoDocumento.subfactor_id,
      descripcion: this.tipoDocumento.descripcion,
      ponderacion: Number(this.tipoDocumento.ponderacion.replace(',', '.')).toFixed(2)
    });
  }

  guardarTipoDocumento() {
    // Validar formulario
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls).forEach( control => {
        control.markAsTouched();
      });
    }

    // Setear BODY
    let tipoDocumento = new TipoDocumento;
    tipoDocumento.subfactor_id = Number(this.forma.value.factor_id);
    tipoDocumento.descripcion = this.forma.value.descripcion;
    tipoDocumento.ponderacion = Number(this.forma.value.ponderacion).toFixed(2).toString();
    // Servicio REGISTRAR/ACTUALIZAR TIPO DOCUMENTO
    this._tipoDocumentoService.guardarTipoDocumento( tipoDocumento )
    .subscribe( (resp: any) => {
      this.router.navigate(['/tipos-documento']);
    });
  }

}
