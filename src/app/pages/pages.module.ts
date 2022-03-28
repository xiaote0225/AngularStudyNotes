import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { NoAuthComponent } from './no-auth/no-auth.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NoAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule
  ],
  exports:[
    LayoutComponent,
  ]
})
export class PagesModule { }
