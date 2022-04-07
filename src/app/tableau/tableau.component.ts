import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { from, Observable } from 'rxjs';
import {ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
  @Input() data:Array<any>|Observable<any>
  @Input() ignore:Array<string>=[];
  key:Array<string>;
  arr:Array<any>=[];
  xxx:Array<any>=[];
  constructor( private cdref: ChangeDetectorRef ) {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  
  ngOnInit(): void {
    
    
  }
  ngAfterViewInit() {
    setTimeout(() => {  this.lol(); }, 0);
  }
  
  lol(){
    console.log(this.data);
    if(this.data){
      if(this.data instanceof Array){
        this.key=this.getKey(this.data);
        this.data.forEach((e:any)=>this.arr.push(e))
      }
      else if (this.data instanceof Observable){
        this.data.subscribe( (rep:any)=>{
          for(let i=0;i<rep.length;i++){
            this.arr.push(rep[i]);
            this.compact(this.arr[i])

          }
          this.key= this.getKey(this.arr);
        })
        
      }
    }
    
  }
  


  getKey(data:Array<any>):Array<string>{
    // console.log(this.child(data[0]));
    return this.getKeyyy(data,[]);
  }
  getKeyyy(data:Array<any>,rep:Array<string>):Array<string>{
    



    for(let i = 0 ; i < data.length ; i++){
    
    
      let k:Array<string> = Object.keys(data[i]);

      for(let j=0 ; j < k.length ; j++)
        if (k[j]!="value" && !this.ignore.includes(k[j]) && (<any>data[i])[k[j]] && !rep.includes(k[j])){
          // i=0 nomProvince et region
          let boucle=data[i]



          if (boucle[k[j]] instanceof Array ){ //ra oatra le data [i][k[i]] array
            for (let w=0;w<k[j].length;w++)
            {
              let el:Array<any>=boucle[k[j]];
              this.getKeyyy(el,rep);
            }
          }
          else if (boucle[k[j]] instanceof Object ){
            this.getKeyyy([boucle[k[j]]] ,rep)
            // console.log();
          }
          
          else rep.push(k[j]);
        }
    
    
    }
    
    return rep;
  }

 
  child(o:any){
    let rep=this.childs(o,[o]);
    return rep;
  }
  childs(o:any,rep:Array<any>){
    let key=Object.keys(o);
    for(let i=0;i<key.length;i++){
      if(o[key[i]] instanceof Array ){
        for(let j=0;j<o[key[i]].length;j++){
          if(!rep.includes(o[key[i]][j])){

            if (j>0 )
            rep.push(o[key[i]][j]);
            
            
            rep=this.childs(o[key[i]][j],rep);
          }
        }
        
        
      }
      else if(o[key[i]] instanceof Object){
        // rep.push([o[key[i]]]);
        this.childs(o[key[i]],rep)
      }
      

    }
    return rep;
  }
  compact(o:any){
    // console.log(o);
    let key=Object.keys(o);
    for(let i=0;i<key.length;i++){
      if(o[key[i]] instanceof Array){
        for(let j=0;j<o[key[i]].length;j++){
          this.compact(o[key[i]][j]);
        }
        this.assign(o,o[key[i]][0])
        
      }
      else if(o[key[i]] instanceof Object){
        this.compact(o[key[i]]);
        this.assign(o,o[key[i]])
      }
      

    }
  }


  assign(to:any,from:any){
    let key=Object.keys(from);
    for(let i=0;i<key.length;i++){
      let k=key[i]
      if (from[k] && typeof from[k]!="object")
        to[k]=from[k];


    }
    
  }
}


