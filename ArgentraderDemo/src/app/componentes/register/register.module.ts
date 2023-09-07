import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateUserComponent } from './form-create-user/form-create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    FormCreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    FormCreateUserComponent
  ]
})
export class RegisterModule { }
