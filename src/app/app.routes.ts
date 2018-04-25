import{Routes,RouterModule} from "@angular/router";
import { NopageComponent } from "./pages/nopage/nopage.component";

const appRoutes : Routes =[
    {path:'**',component:NopageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});