import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from 'src/app/services/guards/user-auth.guard';
import { UserCenterComponent } from './user-center.component';

const routes: Routes = [{ path: '', component: UserCenterComponent,canActivate:[UserAuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule { }
