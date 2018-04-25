import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { APP_ROUTES } from './app.routes';
import { PageModule } from './pages/page.module';




@NgModule({
  declarations: [
    AppComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
