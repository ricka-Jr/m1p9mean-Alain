import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  image = '/assets/img/kaly.jpg' 
  constructor() { }

  ngOnInit(): void {
  }

}
