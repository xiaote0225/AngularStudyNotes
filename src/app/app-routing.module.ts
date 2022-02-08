import { NotFoundComponent } from './router-study/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/heroes',pathMatch:'full'},
  // {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing:true
    onSameUrlNavigation:'reload',
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
