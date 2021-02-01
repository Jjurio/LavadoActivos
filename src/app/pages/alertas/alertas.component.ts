import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/model/alerta.model';
import { AlertaService } from 'src/app/services/alerta.service';
import { UsuarioService } from '../../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: []
})
export class AlertasComponent implements OnInit {

  alertas: Alerta[] = [];

  constructor( public _alertaService: AlertaService,
               public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    init_plugins();
    this.listarAlertas();
  }

  listarAlertas(){
    // Servicio LISTAR CLIENTES
    /* this.paginaActual = 1; */
    this._alertaService.listarAlertas(this._usuarioService.usuario.nidUser)
      .subscribe( (resp: any) => {
        this.alertas = resp;
        console.log(resp);
      });
  }

}
