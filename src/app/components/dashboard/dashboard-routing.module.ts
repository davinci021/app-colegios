import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Alumnos'}},
    { path: 'calificaciones', component: CalificacionesComponent, data: { titulo: 'Calificaciones'}},
    { path: 'reportes', component: ReportesComponent, data: { titulo: 'Reportes'}},
    { path: 'nuevo', component: CrearUsuarioComponent, data: { titulo: 'Crear Alumno'}},
    { path: 'asistencias', component: AsistenciaComponent, data: { titulo: 'Asistencias'}},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
