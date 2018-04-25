import { Component, OnInit } from '@angular/core';
declare function initGalleryTour();
@Component({
  selector: 'app-chichenitza-by-airplane',
  templateUrl: './chichenitza-by-airplane.component.html',
  styles: []
})
export class ChichenitzaByAirplaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initGalleryTour();
  }

}
