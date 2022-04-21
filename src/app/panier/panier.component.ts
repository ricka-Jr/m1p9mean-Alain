import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';
import { DOCUMENT } from '@angular/common'; 
import { Commande } from '../model/commande';
import { Observable } from 'rxjs';
// import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
declare function visible(i : number) : void
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  paniers : any = [] 
  quantite = new FormControl('')
  client : any = {}
  constructor( private route: ActivatedRoute, public ws:PersonneService, @Inject(DOCUMENT) document: any) { }


  ngOnInit(): void {
    this.paniers = this.getPanier()
  }
  getPanier(){
    var values=[], keys=Object.keys(localStorage);
    for(let i=0; i<keys.length;i++){
      if(keys[i] != 'access_token' && keys[i] != 'idClientConnecter'){
        values.push(JSON.parse(localStorage.getItem(keys[i])+""));
      }
    }
    return values;
  }

  deletePanier(initial : number){
    var plat : any[] = this.getPanier()
    var key = plat[initial]
    localStorage.removeItem(key._id)
  }
// get total prix plat commander
  prixGlobalCommande(prixInitial: number, quantite: number){
    return prixInitial * quantite
  }
// get object commande 
  getCommande(client: any, idKaly: string, i: number){
    var plat  = this.paniers[i]
    let id_kaly = (<HTMLInputElement>document.getElementById(idKaly)).value;
    let commande : Commande = {
      plat: {
        _id : id_kaly,
        designation: plat.designation,
        prix: this.prixGlobalCommande(plat.prix, this.quantite.value),
        profil: plat.profil,
        restaurant: {
            _id: plat.restaurant._id,
            nom: plat.restaurant.nom
        }
      },
      client: {
          _id: client._id,
          nom: client.nom
      },
      quantite: this.quantite.value
    }
    return commande
  }
// commande plat client
  commander(idKaly : string, i : number){
    var id = this.ws.getIdClientConnecter()+""
    this.ws.getClient(id).subscribe((data : any) => {
        this.client = data.clients[0]
        let commande = this.getCommande(this.client, idKaly, i)
        this.ws.commandeCLient(commande).subscribe({
          next: data => {
            console.log(data)
            this.deletePanier(i)
            visible(i)
          },
          error: err => {
            alert('ERROR :'+err.error)
          },
          complete: ()=> {}
        })
      }     
    )
  }
}
