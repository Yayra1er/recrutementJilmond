import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'recrutement', loadChildren: () => import('./recrutement/recrutement.module').then(m => m.RecrutementModule) }, { path: 'commun', loadChildren: () => import('./commun/commun.module').then(m => m.CommunModule) }, { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
