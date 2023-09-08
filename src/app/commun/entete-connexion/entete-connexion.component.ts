import { Component } from '@angular/core';

@Component({
  selector: 'app-entete-connexion',
  templateUrl: './entete-connexion.component.html',
  styleUrls: ['./entete-connexion.component.scss']
})
export class EnteteConnexionComponent {

  etat2:boolean= true;

  Onclick(){
    this.etat2= false;
  }

}
