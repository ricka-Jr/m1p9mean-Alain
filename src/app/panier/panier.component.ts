import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';
// import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier : any = [] 
  sessionResto : string = "haha"
  constructor( private route: ActivatedRoute, public ws:PersonneService) { }

  ngOnInit(): void {
    // this.sessionResto = localStorage.getItem('sessionResto')+""
    // console.log(this.route.snapshot.queryParamMap.get('idResto')+"")
    this.panier = this.getPanier()
  }
  getPanier()
  {
    var values=[],
      keys=Object.keys(localStorage),
      i=keys.length;
    for(let a=0; a<i;a++){
      values.push(JSON.parse(localStorage.getItem(keys[a])+""));
    }
    console.log("haha"+values);
    return values;
  }

}
