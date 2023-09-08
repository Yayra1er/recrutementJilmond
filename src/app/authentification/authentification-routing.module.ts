import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilCandidatComponent } from '../recrutement/acceuil-candidat/acceuil-candidat.component';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path:'connexion', component: LoginComponent},
{ path:'Inscription', component: RegisterComponent},
{ path:'acceuil', component: AcceuilCandidatComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
