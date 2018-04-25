import { Component, OnInit } from '@angular/core';
declare function initTestimonialsAngular();
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTestimonialsAngular();
  }

}
