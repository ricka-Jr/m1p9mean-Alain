import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/services/personne.service';

@Component({
  selector: 'app-accueil-e-kaly-client',
  templateUrl: './accueil-e-kaly-client.component.html',
  styleUrls: ['./accueil-e-kaly-client.component.css']
})
export class AccueilEKalyClientComponent implements OnInit {

  public restaurants : any
  constructor(public ws:PersonneService) { }

  ngOnInit(): void {
    // this.restaurants = this.ws.findAllRestaurant()
    this.findRestaurant()
  }

  findRestaurant(){
    this.ws.findAllRestaurant().subscribe(data => {
       this.restaurants = data;
      });
  }

  // findAllResto(){
  //   this.ws.findAllRestaurant().subscribe(restaurants => {
  //     this.restaurants = restaurants.json();
  // }

}
