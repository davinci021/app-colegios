import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  disableSelect = new FormControl(false);
  alumnoForm:FormGroup;
  sexo : any[] = ['Masculino', 'Femenino'];


  constructor(private fb:FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: 'david',
      apellido: '',
      sexo: '',
      fec_nac: '',
    })
   }

  ngOnInit(): void {
  }

  agregarAlumno(){
    console.log(this.alumnoForm.value);
    console.log(this.alumnoForm.value.fec_nac.toISOString().substring(0, 10));
  }
}
