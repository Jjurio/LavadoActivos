import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NopagefoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot( routes, { useHash: true } );
