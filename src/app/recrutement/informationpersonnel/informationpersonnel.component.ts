import { Component } from '@angular/core';

@Component({
  selector: 'app-informationpersonnel',
  templateUrl: './informationpersonnel.component.html',
  styleUrls: ['./informationpersonnel.component.scss']
})
export class InformationpersonnelComponent {
  isPasswordEditing: boolean = false;
  editPassword() {
    this.isPasswordEditing = !this.isPasswordEditing;
  }

}
