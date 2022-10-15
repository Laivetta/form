import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-group-ejemplo',
  templateUrl: './form-group-ejemplo.component.html',
  styleUrls: ['./form-group-ejemplo.component.css']
})
export class FormGroupEjemploComponent implements OnInit {

  formulario = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl('')
  })

  persona: Persona;

  constructor() { }

  ngOnInit(): void {     }

  enviar() {
      this.persona = this.formulario.value
      console.log(this.persona)
  }
}



export interface Persona {
  nombre: string,
  apellido: string 
}