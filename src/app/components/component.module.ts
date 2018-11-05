import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent, NewsComponent],
  exports:[FormComponent,NewsComponent]
})
export class ComponentModule { }
