import { Routes,RouterModule } from "@angular/router";
import { PageComponent } from "./page.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ToursComponent } from "./tours/tours.component";
import { ChichenComponent } from "./tours/chichen/chichen.component";
import { TulumCobaComponent } from "./tours/tulum-coba/tulum-coba.component";
import { ChichenitzaByAirplaneComponent } from "./tours/chichenitza-by-airplane/chichenitza-by-airplane.component";


const pageRoutes : Routes=[
    {
        path:'',component:PageComponent,
        children:[
            {path:'',redirectTo:'/home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'contact',component:ContactComponent},
            {path:'about',component:AboutComponent},
            {path:'gallery',component:GalleryComponent},
            {path:'tours',component:ToursComponent},
            {path:'tours/chichen-itza',component:ChichenComponent},
            {path:'tours/tulum-coba',component:TulumCobaComponent},
            {path:'tours/chichen-itza-by-airplane',component:ChichenitzaByAirplaneComponent}
        ]
    }
];

export const PAGES_ROUTE = RouterModule.forChild(pageRoutes);