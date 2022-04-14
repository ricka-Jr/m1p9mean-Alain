import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  token : string = 'haha';
  constructor(private http: HttpClient) {
    
   }

  login(mail:string, mdp:string){
    return this.http.get(base_url + '/token/'+mail +'/'+ mdp)
  }
  // findToken():Observable<any>{ return this.http.get(base_url + '/token') }
  setToken(token : string){
    localStorage.setItem('access_token', token)
  }
  getToken(){
    return localStorage.getItem('access_token')
  }
  get headers(){
    const headers = new HttpHeaders().set('Content-type', 'application/json').set('tokens', this.getToken()+"");
    return {headers: headers};
  }

  removeToken(){
    localStorage.clear()
  }
  
//  client
createClient(client: any){
  return this.http.post(base_url + '/inscriptionClient', client,  this.headers);
}

loginClient(EmailAndPassword: any){
  return this.http.post(base_url + '/loginClient', EmailAndPassword,  this.headers);
}
// { observe: 'response' } localStorage.setItem('access_token', this.token)+""

// commande 
  find(){
    return this.http.get(base_url + '/findCommande/personnes', this.headers);
  }

  create(personne: any){
    return this.http.post(base_url + '/findCommande/personnes', personne, this.headers);
  }
  
// restaurant
  findAllRestaurant(){
    return this.http.get(base_url + '/findAllRestaurant', this.headers);
  }
  
// plats
  findPlatByRestaurant(idResto : string){
    return this.http.get(base_url + '/findbyRestaurant/'+ idResto, this.headers);
  }
}
