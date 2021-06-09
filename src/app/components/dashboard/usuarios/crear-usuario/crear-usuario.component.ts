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

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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
  }
}
