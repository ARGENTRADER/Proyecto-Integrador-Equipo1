import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateUserComponent } from './form-create-user/form-create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AppRoutingModule } from 'app/app-routing.module';
=======
import { RouterModule } from '@angular/router';
>>>>>>> bethania-la-manna



@NgModule({
  declarations: [
    FormCreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    RouterModule
>>>>>>> bethania-la-manna
  ],
  exports:[
    FormCreateUserComponent
  ]
})
export class RegisterModule { }
