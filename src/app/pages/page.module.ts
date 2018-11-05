import { NgModule } from "@angular/core";
import { PageComponent } from './page.component';
import { PAGES_ROUTE } from "./page.route";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ToursComponent } from './tours/tours.component';
import { ChichenComponent } from './tours/chichen/chichen.component';
import { TulumCobaComponent } from './tours/tulum-coba/tulum-coba.component';
import { ChichenitzaByAirplaneComponent } from './tours/chichenitza-by-airplane/chichenitza-by-airplane.component';
import { ComponentModule } from '../components/component.module';
import { ServiceModule } from "../services/service.module";
import { CommonModule } from "@angular/common";
import { ChichenNightsComponent } from './tours/chichen-nights/chichen-nights.component';
import { FlyToursComponent } from './tours/fly-tours.component';
import { ScenicComponent } from './tours/scenic/scenic.component';




@NgModule({
    declarations: [
        PageComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        GalleryComponent,
        ToursComponent,
        ChichenComponent,
        TulumCobaComponent,
        ChichenitzaByAirplaneComponent,
        ChichenNightsComponent,
        FlyToursComponent,
        ScenicComponent],
    exports: [
        PageComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        GalleryComponent,
        ToursComponent,
        ChichenComponent,
        TulumCobaComponent,
        ChichenitzaByAirplaneComponent,
        ChichenNightsComponent,
        FlyToursComponent,
        ScenicComponent],
    imports: [
        PAGES_ROUTE,
        SharedModule,
        ComponentModule,
        ServiceModule,
        CommonModule]
})

export class PageModule {

}
