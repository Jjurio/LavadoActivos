import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string = '';
  subtitulo: string = '';
  modulo: string = '';

  constructor( private router: Router,
               private title: Title) {
    this.getDataRoute()
    .subscribe( data => {
      this.titulo = data.titulo;
      this.subtitulo = data.subtitulo;
      this.modulo = data.modulo;
      this.title.setTitle(this.titulo);
    });
   }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
           filter( evento => evento instanceof ActivationEnd ),
           filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null ),
           map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
