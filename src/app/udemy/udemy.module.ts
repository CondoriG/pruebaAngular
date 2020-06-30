import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdemyRoutingModule } from './udemy-routing.module';
import { UdemyComponent } from './udemy.component';
import { NuevosCursosComponent } from './pages/nuevos-cursos/nuevos-cursos.component';
import { DetallesCursoComponent } from './pages/detalles-curso/detalles-curso.component';
import { SharedComponentsModule } from '../shared/components/components.module';
import { UdemyComponentsModule } from './components/components.module';
import { UdemyServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    UdemyComponent,
    NuevosCursosComponent,
    DetallesCursoComponent
  ],
  imports: [
    CommonModule,
    UdemyRoutingModule,
    UdemyComponentsModule,
    UdemyServicesModule,
    SharedComponentsModule
  ]
})
export class UdemyModule { }
