import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunRoutingModule } from './commun-routing.module';
import { CommunComponent } from './commun.component';


@NgModule({
  declarations: [
    CommunComponent,



  ],
  imports: [
    CommonModule,
    CommunRoutingModule
  ]
})
export class CommunModule { }
