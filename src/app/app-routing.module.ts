import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'my-module\my-module', loadChildren: () => import('./my-module/my-module/my-module.module').then(m => m.MyModuleModule) }, { path: 'test1', loadChildren: () => import('./my-module/test1/test1.module').then(m => m.Test1Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
