import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { NewdashboarComponent } from './newdashboar/newdashboar.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


@NgModule({
  declarations: [DashboardComponent, InicioComponent, UsuariosComponent, ReportesComponent, NavbarComponent, CrearUsuarioComponent, NavComponent, AsistenciaComponent, NewdashboarComponent, CalificacionesComponent, AlumnosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class DashboardModule { }
