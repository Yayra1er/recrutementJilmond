import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecrutementRoutingModule } from './recrutement-routing.module';
import { RecrutementComponent } from './recrutement.component';
import { AcceuilCandidatComponent } from './acceuil-candidat/acceuil-candidat.component';
import { EntetePageComponent } from '../commun/entete-page/entete-page.component';
import { FooterPageComponent } from '../commun/footer-page/footer-page.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GestionnaireDashboardComponent } from './gestionnaire-dashboard/gestionnaire-dashboard.component';
import { OffresPostulerComponent } from './offres-postuler/offres-postuler.component';
import { OffresNonPostulerComponent } from './offres-non-postuler/offres-non-postuler.component';
import { EnteteConnexionComponent } from '../commun/entete-connexion/entete-connexion.component';
import { InformationpersonnelComponent } from './informationpersonnel/informationpersonnel.component';




@NgModule({
  declarations: [
    EnteteConnexionComponent,
    EntetePageComponent,
    RecrutementComponent,
    FooterPageComponent,
    AcceuilCandidatComponent,
    FormulaireComponent,
    GestionnaireDashboardComponent,
    OffresPostulerComponent,
    OffresNonPostulerComponent,
    InformationpersonnelComponent
  ],
  imports: [
    CommonModule,
    RecrutementRoutingModule
  ]
})
export class RecrutementModule { }
