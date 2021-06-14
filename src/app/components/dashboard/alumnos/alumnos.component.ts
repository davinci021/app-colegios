import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'Sexo', 'Fecha Nacimiento', 'acciones'];
  dataSource = new MatTableDataSource();
  listarUsuario: any[] = [];

  alumnoForm: FormGroup;
  cursos: any[] = [
    {value: 'curso-01', viewValue: 'Primer Año Medio A'},
    {value: 'curso-02', viewValue: 'Tercer Año Medio C'},
    {value: 'curso-03', viewValue: 'Segundo Año Medio B'},
  ];
  selectedCurso = new FormControl(this.cursos[2].value);
  
  
  constructor(private fb:FormBuilder, private usuarioServices:UsuarioService) {
    this.alumnoForm = fb.group({
      cursos: this.alumnoForm,
    });
   }

  ngOnInit(): void {
    this.cargarAlumno();
  }

  cargarAlumno(){
    this.listarUsuario = this.usuarioServices.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listarUsuario);
  }

  editarAlumno(elemento:number){
    console.log(elemento);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
