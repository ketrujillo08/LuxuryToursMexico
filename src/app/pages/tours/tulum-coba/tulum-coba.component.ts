import { Component, OnInit } from '@angular/core';
declare function initGalleryTour();
@Component({
  selector: 'app-tulum-coba',
  templateUrl: './tulum-coba.component.html',
  styles: []
})
export class TulumCobaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initGalleryTour();
  }

}
