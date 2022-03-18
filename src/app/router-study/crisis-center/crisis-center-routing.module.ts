import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const routes: Routes = [
  {
    path:'crisis-center',
    component:CrisisCenterComponent,
    children:[
      {
        path:'list',
        component:CrisisListComponent,
        children:[
          {
            path:':id',
            component:CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard]
          },
          {
            path:'',
            component:CrisisCenterHomeComponent
          }
        ]
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
