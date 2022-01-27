// import { LoggerService } from 'src/app/services/logger.service';
import { HeroService } from 'src/app/services/hero.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demos/demo.module';
import { PagesModule } from './pages/pages.module';
import { LoggerService } from './services/logger.service';
import { BetterLoggerService } from './services/better-logger.service';
import { APP_CONFIG } from './configs/types';
import { UserService } from './services/user.service';
import { UserLoggerService } from './services/user-logger.service';
import { listToken } from './demos/components/test-service/mobile/mobile-list/mobile-list.component';

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
    HeroService,
    UserService,
    BetterLoggerService,
    // LoggerService
    // {provide:LoggerService,useClass:BetterLoggerService},
    {provide:'httpApi',useValue:'123.com'},
    {provide:LoggerService,useValue:'jkjdlafjkfjslaj'},
    {
      provide:APP_CONFIG,
      useValue:{
        apiEndpoint:'api.heroes.com',
        title:'Dependency Injection'
      }
    },
    {
      provide:UserLoggerService,
      useFactory(userService:UserService){
        return new UserLoggerService(userService)
      },
      deps:[UserService]
    },
    // {provide:listToken,useValue:'app.module.ts'}
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
