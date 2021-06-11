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
  cols:any;
  rows:any;
  constructor(private fb:FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: 'david',
      apellido: '',
      sexo: '',
      fec_nac: '',
    })
   }

  ngOnInit(): void {
    /* this.cols = (window.innerWidth <= 639) ? 3 : 1; */
    if(window.innerWidth >= 639){
      this.cols = 1;
      this.rows = 3
    } else {
      this.cols = 2;
      this.rows = 2;
    }
  }

  agregarAlumno(){
    console.log(this.alumnoForm.value);
    console.log(this.alumnoForm.value.fec_nac.toISOString().substring(0, 10));
  }

  onResize(event) {
    if(event.target.innerWidth <= 640){
      this.cols = 2;
      this.rows = 2
    } else {
      this.cols = 1;
      this.rows = 3;
    }
  }
}
