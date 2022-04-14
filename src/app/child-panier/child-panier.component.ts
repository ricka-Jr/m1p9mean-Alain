import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';

@Component({
  selector: 'app-child-panier',
  templateUrl: './child-panier.component.html',
  styleUrls: ['./child-panier.component.css']
})
export class ChildPanierComponent implements OnInit {

  @Input() panier : any = {}
  @Input() countIndex : number 
  paniers : any = [] 
  sessionResto : string = "haha"
  quantite = new FormControl('')
  
  userFormGroup = new FormGroup({
    userInfo : new FormControl()
    
  })
  constructor( private route: ActivatedRoute, public ws:PersonneService, @Inject(DOCUMENT) document: any) { }


  ngOnInit(): void {
    // this.sessionResto = localStorage.getItem('sessionResto')+""
    // console.log(this.route.snapshot.queryParamMap.get('idResto')+"")
    this.paniers = this.getPanier()
  }
  getPanier(){
    var values=[],
    keys=Object.keys(localStorage),
    i=keys.length;
    for(let a=0; a<i;a++){
      values.push(JSON.parse(localStorage.getItem(keys[a])+""));
    }
    console.log("haha"+values);
    return values;
  }

  commander(i : number){
    var id = 'qte_' + i
    let qte = (<HTMLInputElement>document.getElementById(id)).value;
    console.log(this.quantite.value);
    
  }
}
