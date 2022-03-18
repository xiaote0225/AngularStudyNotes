import { AuthGuard } from './../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'admin',
  component:AdminComponent,
  canActivate:[AuthGuard],
  children:[
    {
      path:'',
      children:[
        {path:'crises',component:ManageCrisesComponent},
        {path:'heroes',component:ManageHeroesComponent},
        {path:'',component:AdminDashboardComponent}
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
