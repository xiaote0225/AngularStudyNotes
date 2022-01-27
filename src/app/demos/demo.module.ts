import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipeModule } from './pipes/pipe.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipeModule,
    DirectivesModule,
    ComponentsModule
  ],
  exports:[
    PipeModule,
    DirectivesModule,
    ComponentsModule
  ]
})
export class DemoModule { }
