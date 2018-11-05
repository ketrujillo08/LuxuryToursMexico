import { Component, OnInit } from '@angular/core';
declare function initGalleryTour();
@Component({
  selector: 'app-scenic',
  templateUrl: './scenic.component.html',
  styles: []
})
export class ScenicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initGalleryTour();
  }

}
