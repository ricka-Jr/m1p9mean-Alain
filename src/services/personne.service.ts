import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  token : string = 'haha';
  login(mail:string, mdp:string){
    return this.http.get(base_url + '/token/'+mail +'/'+ mdp)
  }
  // findToken():Observable<any>{ return this.http.get(base_url + '/token') }

  get headers(){
    const headers = new HttpHeaders().set('Content-type', 'application/json').set('token', this.token);
    return {headers: headers};
  }

  
  find(){
    return this.http.get(base_url + '/findCommande/personnes', this.headers);
  }

  create(personne: any){
    return this.http.post(base_url + '/findCommande/personnes', personne, this.headers);
  }

  createClient(client: any){
    return this.http.post(base_url + '/allCLient/insertClient', client,  this.headers);
  }
  // { observe: 'response' }
}
