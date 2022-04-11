import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
const routes: Routes = [
  { path: '', component: ClientComponent },
  { 
    path: 'accueil',
    loadChildren: () => import('./main-page/main-page.module').then((m)=>m.MainPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
