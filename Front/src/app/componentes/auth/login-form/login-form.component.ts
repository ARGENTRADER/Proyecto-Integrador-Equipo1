/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import{Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl:'./login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    loginForm= this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
    get email() { return this.loginForm.controls.email;}
    get password() { return this.loginForm.controls.password;}
  
    constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
  }
  }
