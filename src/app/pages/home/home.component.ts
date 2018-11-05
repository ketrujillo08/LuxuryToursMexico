import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

declare function onInitHome();
declare function initTestimonialsAngular();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  classPull : string ="pull-left";
  wVideo : number = 0;
  hVideo : number = 0;
  played : boolean = false;
  constructor() { }

  ngOnInit() {
    onInitHome();
    initTestimonialsAngular();
    this.assignFullScreenVideo();
    
  }

  assignFullScreenVideo(){
    let video = <HTMLDivElement> document.querySelector("#video-container");
    let poster = <HTMLDivElement> document.querySelector("#video-home");
    let width = window.screen.width;
    let height = window.screen.height;
    if(width<500){
      height=360;
    }
    video.setAttribute('style','position:relative;width:'+width+'px;height:'+height+'px;');
    poster.setAttribute('style','background-repeat: no-repeat;');
    

    /*video.attributes.item(14).nodeValue=width.toString();
    video.attributes.item(10).nodeValue=height.toString();*/
    console.log("Video",video);
  }
  playVideo(){
    let video = <HTMLVideoElement> document.querySelector("#video-home");
    if(this.played){
      video.pause();
      this.played = false;
    }else{
      this.played=true;
      video.play()
      .then(
        res=>{
          console.log(res);
        }
        
      )
      .catch(reason=>{
        console.log(reason);
      });
    }
    
    
  }

}
