import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunComponent } from './commun.component';

const routes: Routes = [{ path: '', component: CommunComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunRoutingModule { }
