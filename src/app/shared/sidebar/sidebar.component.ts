import { Component, OnInit } from '@angular/core';
declare function hideSideBarAngular();
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  hideSideBar(){
    hideSideBarAngular();
  }

}
