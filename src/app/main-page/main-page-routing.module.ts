import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilEKalyClientComponent } from '../accueil-e-kaly-client/accueil-e-kaly-client.component';
import { BodyPageComponent } from '../body-page/body-page.component';
import { CommandeComponent } from '../commande/commande.component';

const routes: Routes = [
  {
    path: '',
    component : BodyPageComponent,
    children : [
      { path: 'accueil-Ekaly', component: AccueilEKalyClientComponent },
      { path: 'commande', component: CommandeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
