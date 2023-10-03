import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      fechaDeNacimiento: ['', [
        Validators.required,
        Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/), // Validar el formato dd/mm/yyyy
        this.fechaNacimientoValidator
      ]]
    });
  }

  // Validador personalizado para la fecha de nacimiento
 
fechaNacimientoValidator(control: AbstractControl): { [key: string]: any } | null {
  const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (fechaRegex.test(control.value)) {
    const partes = control.value.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Meses en JavaScript son 0-indexados (enero es 0)
    const anio = parseInt(partes[2], 10);

    const fechaIngresada = new Date(anio, mes, dia);
    const fechaActual = new Date();

    // Calcular la fecha hace 100 años
    const fechaHace100Anios = new Date();
    fechaHace100Anios.setFullYear(fechaHace100Anios.getFullYear() - 100);

    if (
      dia >= 1 && dia <= 31 &&
      mes >= 0 && mes <= 11 &&
      anio >= fechaHace100Anios.getFullYear() && anio <= fechaActual.getFullYear() &&
      fechaIngresada <= fechaActual
    ) {
      return null;
    }
  }
  return { formatoInvalido: true };
}
}