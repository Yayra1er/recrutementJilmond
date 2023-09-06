import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecrutementRoutingModule } from './recrutement-routing.module';
import { RecrutementComponent } from './recrutement.component';
import { AcceuilCandidatComponent } from './acceuil-candidat/acceuil-candidat.component';
import { EntetePageComponent } from '../commun/entete-page/entete-page.component';
import { FooterPageComponent } from '../commun/footer-page/footer-page.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GestionnaireDashboardComponent } from './gestionnaire-dashboard/gestionnaire-dashboard.component';




@NgModule({
  declarations: [
    EntetePageComponent,
    RecrutementComponent,
    FooterPageComponent,
    AcceuilCandidatComponent,
    FormulaireComponent,
    GestionnaireDashboardComponent
  ],
  imports: [
    CommonModule,
    RecrutementRoutingModule
  ]
})
export class RecrutementModule { }
