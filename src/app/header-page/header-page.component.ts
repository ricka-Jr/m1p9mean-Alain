import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  image = '/assets/img/kaly.jpg' 
  idRestaurant : string = this.route.snapshot.queryParamMap.get('idRestaurant')+""
  plats : Array<any> = []
  keyword = 'designation';
  userFormGroup = new FormGroup({
    userInfo : new FormControl()
    
  })
  
  
  constructor(private route: ActivatedRoute, public ws:PersonneService) { }

  ngOnInit(): void {
    this.idRestaurant =  this.route.snapshot.queryParamMap.get('idRestaurant')+"";
    this.findPlatsByResto(this.idRestaurant)

    // this.countries.map(
    //   (country) => (country.name = `${country.name} ${country.population}`)
    // );
  }
  
  findPlatsByResto(id : string){
    this.ws.findPlatByRestaurant(id).subscribe((data: any) => {
          this.plats = data;
      });
      
  }
  
  // findPlatsByResto(){
  //   this.ws.findPlatByRestaurant(this.idRestaurant).subscribe((data: any) => {
  //     data.forEach((value: any) =>{
  //       console.log
  //         this.plats = value;
  //     })
  //     //  for(let i=0)
  //     });
  // }
}
