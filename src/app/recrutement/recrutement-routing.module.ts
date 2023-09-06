import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecrutementComponent } from './recrutement.component';
import { AcceuilCandidatComponent } from './acceuil-candidat/acceuil-candidat.component';
import { LoginComponent } from '../authentification/login/login.component';
import { AppComponent } from '../app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GestionnaireDashboardComponent } from './gestionnaire-dashboard/gestionnaire-dashboard.component';

const routes: Routes = [

{ path: '', component: RecrutementComponent,

children : [

  { path:'acceuil', component: AcceuilCandidatComponent},

],

},

{ path:'formulaire', component: FormulaireComponent},
{ path:'gestion', component: GestionnaireDashboardComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecrutementRoutingModule { }
