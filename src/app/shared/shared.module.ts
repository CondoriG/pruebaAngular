import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { SharedPipesModule } from './pipes/pipes.module';

@NgModule({

  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponentsModule,
    SharedPipesModule
  ]
})
export class SharedModule { }
