import { RouterModule } from '@angular/router';
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
import { CrisisListComponent } from './router-study/crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './router-study/heroes/hero-list/hero-list.component';
import { NotFoundComponent } from './router-study/not-found/not-found.component';
import { Routes } from '@angular/router';
import { HeroesModule } from './router-study/heroes/heroes.module';
// import { CrisisCenterModule } from './router-study/crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './router-study/compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
// import { AdminModule } from './router-study/admin/admin.module';
import { AuthModule } from './router-study/auth/auth.module';
import { LoginModule } from './pages/login/login.module';

// const routes:Routes =[
//   {path:'crisis-center',component:CrisisListComponent},
//   {path:'heroes',component:HeroListComponent},
//   {path:'',redirectTo:'/heroes',pathMatch:'full'},
//   {path:'**',component:NotFoundComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    // CrisisListComponent,
    // HeroListComponent,
    NotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    DemoModule,
    PagesModule,
    HeroesModule,
    // CrisisCenterModule,
    FormsModule,
    // AdminModule,
    AuthModule,
    LoginModule
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
