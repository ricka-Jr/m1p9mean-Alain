import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'commande', component: CommandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
