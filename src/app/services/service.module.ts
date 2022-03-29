import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from './log.service';



@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: [LogService]
    };
  }
  static forChild(): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule
    };
  }
}
