

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { NewUserDto } from 'app/dtos/new-user-dto';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
  selector: 'app-form-create-user',
  templateUrl: './form-create-user.component.html',
  styleUrls: ['./form-create-user.component.css']
})
export class FormCreateUserComponent implements OnInit {

  createUserForm= this.formBuilder.group({
    nombres: ['',[Validators.required, Validators.pattern("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")]],
    apellidos: ['', [Validators.required, Validators.pattern("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")]],
    fechaNacimiento: ['',[Validators.required]],
    tipoDni: ['', [Validators.required]],
    nroDni: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
    email: ['',[Validators.required, Validators.email]],
    // eslint-disable-next-line no-useless-escape
    password: ['', [Validators.required, Validators.pattern('.{8,}$')]],
    repeatedPassword: ['',[Validators.required]],
  });
  get nombres() { return this.createUserForm.controls.nombres;}
  get apellidos() { return this.createUserForm.controls.apellidos;}
  get fechaNacimiento() { return this.createUserForm.controls.fechaNacimiento;}
  get tipoDni() { return this.createUserForm.controls.tipoDni;}
  get nroDni() { return this.createUserForm.controls.nroDni;}
  get email() { return this.createUserForm.controls.email;}
  get password() { return this.createUserForm.controls.password;}
  get repeatedPassword() { return this.createUserForm.controls.repeatedPassword;}    

  public passwordValidator(): ValidatorFn {
    return () => {

      const password = this.createUserForm.get('password')?.value;
      const repeat_password = this.createUserForm.get('repeatedPassword')?.value;

      if(!password || !repeat_password) return { isValid: false };

      if(password!==repeat_password) return {isValid:false};      
      
      return null;
    };
  }

constructor(private formBuilder:FormBuilder, private service:UserServiceService){
  this.createUserForm.get('repeatedPassword')?.setValidators([Validators.required, this.passwordValidator()]);
}

 
  ngOnInit(): void { 
    
   }
  SaveUser(){
  const userDto:NewUserDto | any= {
    UserName:this.createUserForm.get('nombres')?.value,
    UserLastName:this.createUserForm.get('apellidos')?.value,
    UserBornDay:this.createUserForm.get('fechaNacimiento')?.value,
    CredentialType: this.createUserForm.get('tipoDni')?.value,
    UserDni: this.createUserForm.get('nroDni')?.value,
    UserEmail:this.createUserForm.get('email')?.value,
    Password:this.createUserForm.get('password')?.value,
  }
    this.service.createUser(userDto).subscribe({
    next: (v) =>console.log(v),
    error:(e) =>console.error(e),
    complete:() => console.info('complete')
  })
  this.createUserForm.reset();
}




}
