import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil-candidat',
  templateUrl: './acceuil-candidat.component.html',
  styleUrls: ['./acceuil-candidat.component.scss']
})
export class AcceuilCandidatComponent {
    etatconnexion:boolean= true;
    etatdeconnexion:boolean= false;
    postuler:boolean=false;

    Onclick(){
      this.etatconnexion= false;
    }

    listepostuler(){
      this.postuler= !this.postuler;
    }




}
