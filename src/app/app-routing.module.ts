import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { AuthGuard } from './router-study/auth/auth.guard';
import { NotFoundComponent } from './router-study/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './router-study/compose-message/compose-message.component';
import { NoAuthComponent } from './pages/no-auth/no-auth.component';

const namedRoutes = [
  {
    path:'compose',
    component:ComposeMessageComponent,
    outlet:'popup'
  }
]

const routes: Routes = [
  // {
  //   path:'admin',
  //   loadChildren: () => import('./router-study/admin/admin.module').then(m => m.AdminModule),
  //   canLoad:[AuthGuard]
  //   // data:{preload:true}
  // },
  // {
  //   path:'crisis-center',
  //   loadChildren: () => import('./router-study/crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  //   data:{preload:true}
  // },
  {path:'login',loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path:'no-auth',component:NoAuthComponent,data:{title:'无权限'}},
  {path:'',redirectTo:'/home/heroes',pathMatch:'full'},
  // {path:'**',redirectTo:'/home/heroes'}
  // {path:'**',component:NotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes.concat(namedRoutes),{
  //   // enableTracing:true
  //   // onSameUrlNavigation:'reload',
  //   useHash: true,
  //   preloadingStrategy:SelectivePreloadingStrategyService
  // })],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
