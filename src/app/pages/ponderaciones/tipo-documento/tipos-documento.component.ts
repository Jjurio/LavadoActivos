import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocumento } from '../../../model/tipodocumento.model';

declare function init_plugins();

@Component({
  selector: 'app-tipos-documento',
  templateUrl: './tipos-documento.component.html',
  styleUrls: []
})
export class TiposDocumentoComponent implements OnInit {

  tiposDocumento: TipoDocumento[] = [];
  paginaActual: number = 1;

  constructor( public _tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    init_plugins();
    this.listarTipoDocumento();
  }

  listarTipoDocumento(){
    // Servicio LISTAR TIPO DOCUMENTO
    this.paginaActual = 1;
    this._tipoDocumentoService.listarTipoDocumento()
      .subscribe( (resp: any) => {
        this.tiposDocumento = resp;
      });
  }

}
