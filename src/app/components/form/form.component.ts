import { Component, OnInit, Input } from '@angular/core';
import {FormControl,FormGroup,Validators}  from '@angular/forms';
import { ReservaService } from '../../services/service.index';
import { Reserva } from '../../models/reserva.model';
import swal from 'sweetalert';
declare const $;
declare const jQuery;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  formulario:FormGroup;
  @Input() classPull : string = "pull-right";
  constructor(public _reservaService:ReservaService) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup(){
    this.formulario = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      tour:new FormControl(null,Validators.required),
      fecha:new FormControl(null,Validators.required),
      adults:new FormControl(null,Validators.required),
      children:new FormControl(null)
    });

  }

  registrarStepOne(){
    let date = jQuery("input[name='fecha']").val();
    this.formulario.patchValue({'fecha':date});
    if(!this.formulario.valid){
      if(!this.formulario.controls['tour'].value){  
        swal('Important',"You need to choose a tour",'warning');
        return;
      }
      if(!this.formulario.controls['fecha'].value){  
        swal('Important',"You need to choose a day",'warning');
        return;
      }
      if(!this.formulario.value.adults){
        swal('Important','You need at least 1 person','warning');
        return;
      }      
    }
    let reserva = new Reserva(this.formulario.value.name,this.formulario.value.email,this.formulario.value.phone
      ,this.formulario.value.tour,this.formulario.value.fecha,this.formulario.value.adults,this.formulario.value.children);
    this._reservaService.makeReserva(reserva)
    .subscribe(
      res=>{
        if(res.success){
          swal('Congratulations',"Thanks to choose us!",'success');
        }
      }
    )
  }
}
