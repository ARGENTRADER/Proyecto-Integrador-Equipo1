import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuyFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BuyFormComponent
  ]
})
export class BuyFormModuleModule { }
