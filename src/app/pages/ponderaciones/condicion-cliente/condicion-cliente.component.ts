import { Component, OnInit } from '@angular/core';
import { TipoPonderacion } from 'src/app/model/tipoponderacion.model';
import { TipoPonderacionService } from 'src/app/services/tipo-ponderacion.service';
import { Router } from '@angular/router';
import { CondicionClienteService } from 'src/app/services/condicion-cliente.service';
import { CondicionCliente } from '../../../model/condicioncliente';

@Component({
  selector: 'app-condicion-cliente',
  templateUrl: './condicion-cliente.component.html',
  styleUrls: []
})
export class CondicionClienteComponent implements OnInit {

  tiposPonderacion: TipoPonderacion[] = [];
  listadoCondicionCliente: CondicionCliente[] = [];
  titulo: string = 'Ponderacion - Condicion Cliente';

  constructor( public _tipoPonderacionService: TipoPonderacionService,
               public _condicionClienteService: CondicionClienteService,
               public router: Router) { }

  ngOnInit(): void {
    this.cargarTipoPonderacion();
    this.listarCondicionCliente();
  }

  cargarTipoPonderacion(){
    // Servicio CARGAR TIPO PONDERACION
    this._tipoPonderacionService.listarTipoPonderacion()
      .subscribe( (resp: any) => {
        this.tiposPonderacion = resp;
        this.tiposPonderacion.unshift({descripcion : '(Seleccione)', tipo_ponderacion_id: 0});
      });
  }

  listarCondicionCliente(){
    // Servicio LISTAR CONDICION CLIENTE
    this._condicionClienteService.listarCondicionCliente()
      .subscribe( (resp: any) => {
        console.log(resp)
        this.listadoCondicionCliente = resp;
      });
  }

  guardarCondicionCliente() {

    /* // Setear BODY
    let tipoDocumento = new TipoDocumento;
    tipoDocumento.subfactor_id = Number(this.forma.value.factor_id);
    tipoDocumento.descripcion = this.forma.value.descripcion;
    tipoDocumento.ponderacion = Number(this.forma.value.ponderacion).toFixed(2).toString();
    // Servicio REGISTRAR/ACTUALIZAR TIPO DOCUMENTO
    this._tipoDocumentoService.guardarTipoDocumento( tipoDocumento )
    .subscribe( (resp: any) => {
      this.router.navigate(['/tipos-documento']);
    }); */

    this.router.navigate(['/ponderaciones']);
  }

}
