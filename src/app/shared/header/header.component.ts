import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor( public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
