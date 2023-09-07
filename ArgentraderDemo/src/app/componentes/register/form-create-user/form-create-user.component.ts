/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-user',
  templateUrl: './form-create-user.component.html',
  styleUrls: ['./form-create-user.component.css']
})
export class FormCreateUserComponent implements OnInit {

  createUserForm= this.formBuilder.group({
    nombres: ['',[Validators.required]],
    apellidos: ['', Validators.required],
    fechaNacimiento: ['',[Validators.required]],
    tipoDni: ['', [Validators.required]],
    nroDni: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
    email: ['',[Validators.required, Validators.email]],
    // eslint-disable-next-line no-useless-escape
    password: ['', [Validators.required, Validators.pattern('.{8,}$')]],
    repeatedPassword: ['',[Validators.required]]
  });
  get nombres() { return this.createUserForm.controls.nombres;}
  get apellidos() { return this.createUserForm.controls.apellidos;}
  get fechaNacimiento() { return this.createUserForm.controls.fechaNacimiento;}
  get tipoDni() { return this.createUserForm.controls.tipoDni;}
  get nroDni() { return this.createUserForm.controls.nroDni;}
  get email() { return this.createUserForm.controls.email;}
  get password() { return this.createUserForm.controls.password;}
  get repeatedPassword() { return this.createUserForm.controls.repeatedPassword;}


constructor(private formBuilder:FormBuilder){
}



  ngOnInit(): void {
  }
}
