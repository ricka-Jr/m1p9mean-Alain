import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  idRestaurant : string 
  resto : string
  plats : any
  currentUrl : string
  constructor(private route: ActivatedRoute, public ws:PersonneService,  private router : Router) { 
    router.events.subscribe((url:any) => {
      this.currentUrl = router.url
    });
  }
  
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

  findIdResto(idPlat : number) : void{
    var newPlat = this.plats[idPlat]
    localStorage.setItem(newPlat._id, JSON.stringify(newPlat))
  }
}
