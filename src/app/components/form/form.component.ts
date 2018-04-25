import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators}  from '@angular/forms';
import swal from 'sweetalert';
declare const $;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  formulario:FormGroup;
  constructor() { }

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
    let date = $("input[name='fecha']").val();
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

      console.log(this.formulario.value);

      
     
        
    }
  }
}
