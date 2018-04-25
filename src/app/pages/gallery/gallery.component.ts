import { Component, OnInit } from '@angular/core';
declare function initGalleryAngular();
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initGalleryAngular();
  }

}
