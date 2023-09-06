import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { RecrutementModule } from './recrutement/recrutement.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RecrutementModule,
    BrowserModule,
    AuthentificationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
