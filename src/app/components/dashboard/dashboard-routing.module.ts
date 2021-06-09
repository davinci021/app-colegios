import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'inicio', component: InicioComponent},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'reportes', component: ReportesComponent},
    { path: 'nuevo', component: CrearUsuarioComponent},
    { path: 'asistencias', component: AsistenciaComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
