import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateUserComponent } from './form-create-user/form-create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormCreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FormCreateUserComponent
  ]
})
export class RegisterModule { }
