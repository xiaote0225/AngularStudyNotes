import { HeroService } from 'src/app/services/hero.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demos/demo.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    PagesModule
  ],
  providers: [
    // {provide:HeroService,useClass:HeroService}
    HeroService
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
