import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelcursosComponent } from './panelcursos/panelcursos.component';
import { PanelcalificacionesComponent } from './panelcalificaciones/panelcalificaciones.component';
import { PanelgrupoComponent } from './panelgrupo/panelgrupo.component';
import { PanelrecursosComponent } from './panelrecursos/panelrecursos.component';
import { ActividadrecienteComponent } from './actividadreciente/actividadreciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuschoologyComponent } from './menuschoology.component';


@NgModule({
  declarations: [
    PanelcursosComponent,
    PanelcalificacionesComponent,
    PanelgrupoComponent,
    PanelrecursosComponent,
    ActividadrecienteComponent,
    DashboardComponent,
    MenuschoologyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuschoologyComponent
  ]
})
export class MenuschoologyModule { }
