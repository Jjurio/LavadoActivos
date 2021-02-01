import { Component, OnInit } from '@angular/core';
import { PonderacionService } from 'src/app/services/ponderacion.service';
import { SubFactor } from '../../model/subfactor.model';

declare function init_plugins();

@Component({
  selector: 'app-ponderaciones',
  templateUrl: './ponderaciones.component.html',
  styleUrls: []
})
export class PonderacionesComponent implements OnInit {

  ponderaciones: SubFactor[] = [];
  paginaActual: number = 1;

  constructor( public _ponderacionService: PonderacionService) {
   }

  ngOnInit(): void {
    init_plugins();
    this.listarPonderacion();
  }

  listarPonderacion(){
    // Servicio LISTAR PONDERACION
    this.paginaActual = 1;
    this._ponderacionService.listarPonderacion()
      .subscribe( (resp: any) => {
        this.ponderaciones = resp;
      });
  }

}
