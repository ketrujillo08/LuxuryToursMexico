import { NgModule } from "@angular/core";
import { BackTopComponent } from "./back-top/back-top.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports:[RouterModule,CommonModule],
    declarations:[BackTopComponent,HeaderComponent, FooterComponent, SidebarComponent],
    exports:[BackTopComponent,HeaderComponent,FooterComponent,SidebarComponent]
})

export class SharedModule{}