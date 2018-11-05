import { Component, OnInit } from '@angular/core';
declare function initGalleryTour();
@Component({
  selector: 'app-chichen-nights',
  templateUrl: './chichen-nights.component.html',
  styles: []
})
export class ChichenNightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initGalleryTour();
  }

}
