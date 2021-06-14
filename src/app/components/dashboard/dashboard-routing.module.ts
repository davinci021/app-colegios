import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'inicio', component: InicioComponent, data: { titulo: 'Administrador'} },
    { path: 'profesores', component: UsuariosComponent, data: { titulo: 'Profesores'}},
    { path: 'calificaciones', component: CalificacionesComponent, data: { titulo: 'Calificaciones'}},
    { path: 'reportes', component: ReportesComponent, data: { titulo: 'Reportes'}},
    { path: 'profesores/nuevo', component: CrearUsuarioComponent, data: { titulo: 'Crear Profesor'}},
    { path: 'asistencias', component: AsistenciaComponent, data: { titulo: 'Asistencias'}},
    { path: 'alumnos', component: AlumnosComponent, data: { titulo: 'Alumnos'}},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
