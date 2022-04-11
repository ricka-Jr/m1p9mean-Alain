import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { TableauComponent } from './tableau/tableau.component';
import { AccueilEKalyClientComponent } from './accueil-e-kaly-client/accueil-e-kaly-client.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { CopyrightComponent } from './copyright/copyright.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CommandeComponent,
    TableauComponent,
    AccueilEKalyClientComponent,
    MainPageComponent,
    HeaderPageComponent,
    BodyPageComponent,
    CopyrightComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
