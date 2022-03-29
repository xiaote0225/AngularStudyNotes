import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForbinCnDirective } from './forbin-cn.directive';
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForbinCnDirective,
    OpenCloseComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
