import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertaComponent } from './alertas/alerta.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CargaClienteComponent } from './clientes/carga-cliente.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ControlArticuloComponent } from './control-articulo/control-articulo.component';
import { ControlEstrategicoComponent } from './control-estrategico/control-estrategico.component';
import { GestionRiesgosComponent } from './gestion-riesgos/gestion-riesgos.component';

import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { TipoDocumentoComponent } from './ponderaciones/tipo-documento/tipo-documento.component';
import { TiposDocumentoComponent } from './ponderaciones/tipo-documento/tipos-documento.component';
import { PonderacionesComponent } from './ponderaciones/ponderaciones.component';
import { CondicionClienteComponent } from './ponderaciones/condicion-cliente/condicion-cliente.component';
import { CondicionJuridicaComponent } from './ponderaciones/condicion-juridica/condicion-juridica.component';
import { EstadoContribuyenteComponent } from './ponderaciones/estado-contribuyente/estado-contribuyente.component';
import { CondicionTributariaComponent } from './ponderaciones/condicion-tributaria/condicion-tributaria.component';
import { CondicionLaboralComponent } from './ponderaciones/condicion-laboral/condicion-laboral.component';
import { RangoEtarioComponent } from './ponderaciones/rango-etario/rango-etario.component';
import { AntiguedadClienteComponent } from './ponderaciones/antiguedad-cliente/antiguedad-cliente.component';
import { AntiguedadJuridicaComponent } from './ponderaciones/antiguedad-juridica/antiguedad-juridica.component';
import { TipoClienteComponent } from './ponderaciones/tipo-cliente/tipo-cliente.component';
import { TipoOperacionComponent } from './ponderaciones/tipo-operacion/tipo-operacion.component';
import { BeneficiarioFinalComponent } from './ponderaciones/beneficiario-final/beneficiario-final.component';
import { EjecutanteComponent } from './ponderaciones/ejecutante/ejecutante.component';
import { CanalComponent } from './ponderaciones/canal/canal.component';
import { ZonaTerritorioComponent } from './ponderaciones/zona-territorio/zona-territorio.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'perfil', component: PerfilComponent, data: { titulo: 'Mi Perfil' } },
      { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes'}},
      { path: 'carga-cliente', component: CargaClienteComponent, data: { titulo: 'Carga de Clientes'}},
      { path: 'cliente/:id', component: ClienteComponent, data: { titulo: 'Registro de Clientes', subtitulo: 'Registro', modulo: 'Clientes' } },
      { path: 'alertas', component: AlertasComponent, data: { titulo: 'Listado de Alertas', subtitulo: 'Listado', modulo: 'Alertas'}},
      { path: 'alerta/:id', component: AlertaComponent, data: { titulo: 'Alerta', subtitulo: 'Alerta', modulo: 'Alertas' } },
      { path: 'gestion-riesgos', component: GestionRiesgosComponent, data: { titulo: 'Gestión Riesgos'}},
      { path: 'control-estrategico', component: ControlEstrategicoComponent, data: { titulo: 'Control Estratégico'}},
      { path: 'control-articulo', component: ControlArticuloComponent, data: { titulo: 'Control por Articulos'}},

      { path: 'ponderaciones', component: PonderacionesComponent, data: { titulo: 'Ponderaciones', subtitulo: 'Ponderaciones', modulo: 'Configuracion'}},

      { path: 'tipos-documento', component: TiposDocumentoComponent, data: { titulo: 'Tipo Documento', subtitulo: 'Tipo Documento', modulo: 'Ponderaciones'}},
      { path: 'tipo-documento/:id', component: TipoDocumentoComponent, data: { titulo: 'Tipo Documento', subtitulo: 'Tipo Documento', modulo: 'Ponderaciones'}},
      { path: 'condicion-cliente/:id', component: CondicionClienteComponent, data: { titulo: 'Condicion Cliente', subtitulo: 'Condicion Cliente', modulo: 'Ponderaciones'}},
      { path: 'condicion-juridica/:id', component: CondicionJuridicaComponent, data: { titulo: 'Condicion Juridica', subtitulo: 'Condicion Juridica', modulo: 'Ponderaciones'}},
      { path: 'estado-contribuyente/:id', component: EstadoContribuyenteComponent, data: { titulo: 'Estado Contribuyente', subtitulo: 'Estado Contribuyente', modulo: 'Ponderaciones'}},
      { path: 'condicion-tributaria/:id', component: CondicionTributariaComponent, data: { titulo: 'Condicion Tributaria', subtitulo: 'Condicion Tributaria', modulo: 'Ponderaciones'}},
      { path: 'condicion-laboral/:id', component: CondicionLaboralComponent, data: { titulo: 'Condicion Laboral', subtitulo: 'Condicion Laboral', modulo: 'Ponderaciones'}},
      { path: 'rango-etario/:id', component: RangoEtarioComponent, data: { titulo: 'Rango Etario', subtitulo: 'Rango Etario', modulo: 'Ponderaciones'}},
      { path: 'antiguedad-cliente/:id', component: AntiguedadClienteComponent, data: { titulo: 'Antiguedad Cliente', subtitulo: 'Antiguedad Cliente', modulo: 'Ponderaciones'}},
      { path: 'antiguedad-juridica/:id', component: AntiguedadJuridicaComponent, data: { titulo: 'Antiguedad Juridica', subtitulo: 'Antiguedad Juridica', modulo: 'Ponderaciones'}},
      { path: 'tipo-cliente/:id', component: TipoClienteComponent, data: { titulo: 'Tipo Cliente', subtitulo: 'Tipo Cliente', modulo: 'Ponderaciones'}},
      { path: 'tipo-operacion/:id', component: TipoOperacionComponent, data: { titulo: 'Tipo Operacion', subtitulo: 'Tipo Operacion', modulo: 'Ponderaciones'}},
      { path: 'beneficiario-final/:id', component: BeneficiarioFinalComponent, data: { titulo: 'Beneficiario Final', subtitulo: 'Beneficiario Final', modulo: 'Ponderaciones'}},
      { path: 'ejecutante/:id', component: EjecutanteComponent, data: { titulo: 'Ejecutante', subtitulo: 'Ejecutante', modulo: 'Ponderaciones'}},
      { path: 'canal/:id', component: CanalComponent, data: { titulo: 'Canal', subtitulo: 'Canal', modulo: 'Ponderaciones'}},
      { path: 'zona-territorio/:id', component: ZonaTerritorioComponent, data: { titulo: 'Zona Territorio', subtitulo: 'Zona Territorio', modulo: 'Ponderaciones'}},
      { path: '', redirectTo: '/alertas', pathMatch: 'full' }
    ]
}
];

/* @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { } */
export const PagesRoutingModule = RouterModule.forChild( routes) ;
