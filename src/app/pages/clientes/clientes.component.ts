import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  paginaActual: number = 1;

  constructor( public _clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.listarClientes('', '');
  }

  listarClientes(descripcion: string, numero_documento: string){
    // Servicio LISTAR CLIENTES
    this.paginaActual = 1;
    this._clienteService.listarClientes(descripcion, numero_documento)
      .subscribe( (resp: any) => {
        this.clientes = resp;
      });
  }
}
