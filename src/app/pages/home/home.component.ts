import { Component, OnInit } from '@angular/core';
declare function onInitHome();
declare function initTestimonialsAngular();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    onInitHome();
    initTestimonialsAngular();
  }

}
