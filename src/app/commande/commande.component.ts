import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  constructor(private route: ActivatedRoute, public ws:PersonneService) { }
  idRestaurant : string 
  resto : string
  plats : any
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.idRestaurant =  params['idRestaurant'];
      }
    )
    this.findPlatsByResto()
  }
  
  findPlatsByResto(){
    this.ws.findPlatByRestaurant(this.idRestaurant).subscribe(data => {
       this.plats = data;
      });
  }
}
