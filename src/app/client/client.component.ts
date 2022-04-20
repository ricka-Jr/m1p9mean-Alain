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
    this.ws.loginClient(this.EmailAndPassword).subscribe({
      next: (data : any) => {
        // @ts-ignore
        this.ws.setToken(data.token)
        this.ws.setIdClient(data.clients[0]._id)
      },
      error: err => {
        alert('ERROR :'+err.error)
      },
      complete: ()=> {
        this.router.navigate(['accueil/accueil-Ekaly'])
      }
    })
  }

  // logoutClient(){
  //   this.ws.removeToken()
  //   this.router.navigate([''])
  // }

  insertClient(){
    this.ws.createClient(this.client).subscribe({
      next: data => {
        console.dir(data)
        // @ts-ignore
        console.log('tokenNewClient = '+ data.token)
        // @ts-ignore
        this.ws.setToken(data.token)
      },
      error: err => {
        alert('ERROR :'+err.error)
      },
      complete: ()=> {
        this.router.navigate(['accueil/accueil-Ekaly'])
      }
    })
      // (data : any) => {
      //     console.log('tokenNewClient = '+ data.token)
      //     console.dir(data)
      //     this.router.navigate(['accueil/accueil-Ekaly'])
      // }, (err) => {
      //   alert('erreur : '+err.statusText);
      // });
      
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