import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/services/personne.service';
declare function animation() : void

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  email : string = "client@ekaly.mg"
  password : string = "client1234"
  client : any = {}
  EmailAndPassword : any = {}
  constructor(public ws:PersonneService, private elementRef:ElementRef, private router : Router) { }
  // token : any = this.ws.headers;
  ngOnInit(): void {
    animation()

  }
  login(){
    this.ws.login(this.email, this.password).subscribe((data : any)=>{
      this.router.navigate(['accueil/accueil-Ekaly'])
    },
     (error : any)=>{
      alert(error.error)
     })
  }

  loginClient(){
    this.ws.loginClient(this.EmailAndPassword).subscribe((data : any)=>{
      this.router.navigate(['accueil/accueil-Ekaly'])
    },
     (error : any)=>{
      alert(error.error)
     })
  }

  insertClient(){
    this.ws.createClient(this.client).subscribe(  
      (data : any) => {
          console.log('token = '+ data.token)
          this.router.navigate(['accueil/accueil-Ekaly'])
      }, (err) => {
        alert('erreur : '+err.statusText);
      });
      
  }

}
// (res) => {
      //   if (res.status == 200) {
      //     localStorage.setItem('token', this.token );
      //     this.router.navigate(['accueil/accueil-Ekaly'])
      //   }
      //   if(res.status == 500){
      //     alert(res.statusText)
      //     this.router.navigate([''])
      //   } 