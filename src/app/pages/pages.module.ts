//Modulos
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination';


//Rutas
import { PagesRoutingModule } from './pages-routing.module';

//Componentes
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';

//Zona Horaria
import { registerLocaleData } from '@angular/common';
import localesPE from '@angular/common/locales/es-PE';
import { ClientesComponent } from './clientes/clientes.component';
import { AlertasComponent } from './alertas/alertas.component';
import { GestionRiesgosComponent } from './gestion-riesgos/gestion-riesgos.component';
import { ControlEstrategicoComponent } from './control-estrategico/control-estrategico.component';
import { ControlArticuloComponent } from './control-articulo/control-articulo.component';
import { AlertaComponent } from './alertas/alerta.component';
import { ClienteComponent } from './clientes/cliente.component';
import { CargaClienteComponent } from './clientes/carga-cliente.component';
import { TipoDocumentoComponent } from './ponderaciones/tipo-documento/tipo-documento.component';
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
import { PaisComponent } from './ponderaciones/pais/pais.component';
import { TiposDocumentoComponent } from './ponderaciones/tipo-documento/tipos-documento.component';
import { PonderacionesComponent } from './ponderaciones/ponderaciones.component';
import { ZonaTerritorioComponent } from './ponderaciones/zona-territorio/zona-territorio.component';

registerLocaleData(localesPE, 'es-Pe');


@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent,
    ClientesComponent,
    AlertasComponent,
    GestionRiesgosComponent,
    ControlEstrategicoComponent,
    ControlArticuloComponent,
    AlertaComponent,
    ClienteComponent,
    CargaClienteComponent,
    TipoDocumentoComponent,
    CondicionClienteComponent,
    CondicionJuridicaComponent,
    EstadoContribuyenteComponent,
    CondicionTributariaComponent,
    CondicionLaboralComponent,
    RangoEtarioComponent,
    AntiguedadClienteComponent,
    AntiguedadJuridicaComponent,
    TipoClienteComponent,
    TipoOperacionComponent,
    BeneficiarioFinalComponent,
    EjecutanteComponent,
    CanalComponent,
    PaisComponent,
    TiposDocumentoComponent,
    PonderacionesComponent,
    ZonaTerritorioComponent
  ],
  exports: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ChartModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Pe' }
  ]
})
export class PagesModule { }