import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateUserComponent } from './form-create-user/form-create-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormCreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormCreateUserComponent
  ]
})
export class RegisterModule { }
