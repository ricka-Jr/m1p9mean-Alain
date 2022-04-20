import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';
import { DOCUMENT } from '@angular/common'; 
// import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
declare function visible(i : number) : void
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  paniers : any = [] 
  sessionResto : string = "haha"
  quantite = new FormControl('')
  
  constructor( private route: ActivatedRoute, public ws:PersonneService, @Inject(DOCUMENT) document: any) { }


  ngOnInit(): void {
    this.paniers = this.getPanier()
  }
  getPanier(){
    var values=[], keys=Object.keys(localStorage);
    for(let i=0; i<keys.length;i++){
      if(keys[i] != 'access_token'){
        values.push(JSON.parse(localStorage.getItem(keys[i])+""));
      }
    }
    return values;
  }

  deletePanier(initial : number){
    var plat= this.getPanier()
    var key = plat[initial]._id
    localStorage.removeItem(key)
  }
  commander(idKaly : string, i : number){
    let id_kaly = (<HTMLInputElement>document.getElementById(idKaly)).value;
    
    // console.log(id_kaly+' quantie = '+this.quantite.value)
    this.deletePanier(i)
    visible(i)
  }
}
