import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UdemyComponent } from './udemy.component';
import { NuevosCursosComponent } from './pages/nuevos-cursos/nuevos-cursos.component';
import { DetallesCursoComponent } from './pages/detalles-curso/detalles-curso.component';


const routes: Routes = [
  { path: '',
    component: UdemyComponent,
    children: [
      { path: '', redirectTo: 'nuevos-cursos', pathMatch: 'full'},
      { path: 'nuevos-cursos', component: NuevosCursosComponent },
      { path: 'detalles-curso', component: DetallesCursoComponent },
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdemyRoutingModule { }
