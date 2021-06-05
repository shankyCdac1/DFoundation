import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initiate superfish on nav menu 
    (<any>$('.nav-menu')).superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });

        
      }


  }
