import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from './service.index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[ReservaService],
  declarations: []
})
export class ServiceModule { }
