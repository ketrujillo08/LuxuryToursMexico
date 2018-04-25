import { Component, OnInit } from '@angular/core';
declare function hideMobileMenu();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    hideMobileMenu();
  }

}
