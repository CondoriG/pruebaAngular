import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosCardComponent } from './cursos-card/cursos-card.component';



@NgModule({
  declarations: [
    CursosCardComponent
  ],
  exports: [
    CursosCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UdemyComponentsModule { }
