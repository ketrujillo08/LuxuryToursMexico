import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_FACEBOOK_API,FAN_PAGE_ID,LUXURY_FANPAGE_ACCESS_TOKEN } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  message:String;
  image:String;
  video:String;
  title:String;

  constructor(public _http:HttpClient) {
   
  }

  ngOnInit() {
    this.getPublicacion();
  }

  getIdFeedFacebook(){
    let url = URL_FACEBOOK_API + FAN_PAGE_ID + '?fields=feed&access_token=' + LUXURY_FANPAGE_ACCESS_TOKEN;
    return this._http.get(url)
    .map((res:any)=>{
        if(res.feed){
          for(let i in res.feed.data){
            if(res.feed.data[i].message){
              this.message = res.feed.data[i].message;
              return res.feed.data[i].id;
            }
          }
        }else{
          return false;
        }
    });

  }
  getPublicacion(){
    let feed;
    this.getIdFeedFacebook()
    .subscribe((idface)=>{
      console.log(idface);
      let url = URL_FACEBOOK_API + idface + '?fields=attachments&access_token=' + LUXURY_FANPAGE_ACCESS_TOKEN;
      this._http.get(url)
        .subscribe((res:any)=>{
          console.log(res);
          this.image=res.attachments.data[0].subattachments.data[0].media.image.src;
          this.video=res.attachments.data[0].url;
          this.title=res.attachments.data[0].title;
      });
    });
  }



}
