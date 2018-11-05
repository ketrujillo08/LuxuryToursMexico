import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../models/reserva.model';
import { URL_SERVICIOS } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservaService {

  constructor(public _http:HttpClient) { }

  makeReserva(reserva:Reserva){
    let url = URL_SERVICIOS + '/mailer';
    return this._http.post(url,reserva)
    .map((res:any)=>{
      return res
    });

  }

}
