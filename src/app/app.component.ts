import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PersonneService } from 'src/services/personne.service';
import { getMessaging, getToken, onMessage } from "firebase/messaging" ;
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app" ; 
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

// initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  personne: any = {}
  result: any[] = []
  title = 'crud-angular'
  CurrentUrl : string = "accueil"
  constructor(private personneService: PersonneService, private router : Router){
    router.events.subscribe((url:any) => {
      this.CurrentUrl = router.url
    });
  }
  ngOnInit(): void {
    // this.Find();
    // this.requestPermission(); 
    // this.listen(); 
  }

  
  Create(){
    const success = (res: any) => {
      if(res.status === 'SUCCESS'){
        this.Find();
      } else{
        console.log(res.message);
      }
    }
    const error = (err: any) => {
      console.log(err)
    }
    this.personneService.create(this.personne).subscribe(success, error);
  }

  Find(){
    const success = (res: any) => {
      if(res.status === 'SUCCESS'){
        // this.result = res.data;
        res.data.forEach((e:any)=>this.result.push(e))

      } else{
        console.log(res.message);
      }
    }
    const error = (err: any) => {
      console.log(err)
    }
    this.personneService.find().subscribe(success, error);
  }

  
  // requestPermission() { 
  //   const messaging = getMessaging(); 
  //   getToken(messaging, 
  //    { vapidKey: environment.firebaseConfig.vapidKey}).then( 
  //      (currentToken) => { 
  //        if (currentToken) { 
  //          console.log("Hurraaa!!! nous avons le jeton...."); 
  //          console .log(currentToken); 
  //        } else { 
  //          console.log('Aucun jeton denregistrement disponible. Demander lautorisation den générer un.'); 
  //        }
  //    }).catch((err) => { 
  //       console.log('Une erreur sest produite lors de la récupération du jeton. ', err); 
  //   }); 
  // } 
  // listen() { 
  //   const messagerie = getMessaging(); 
  //   onMessage(messagerie, (param) => { 
  //     console.log('Message reçu. ', param); 
  //   }); 
  // }
}
