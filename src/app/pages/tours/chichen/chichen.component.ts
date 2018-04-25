import { Component, OnInit } from '@angular/core';
declare function initGalleryTour();
@Component({
  selector: 'app-chichen',
  templateUrl: './chichen.component.html',
  styles: []
})
export class ChichenComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
    initGalleryTour();
  }

}
