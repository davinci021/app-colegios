import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface Alumnos {
  nombre: string;
  apellido: string;
  position: number;
  sexo: string;
  fec_nac: string;
}

export interface Notas {

}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listarAlumnos: Alumnos[] = [];
  
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'Sexo', 'Fecha Nacimiento', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private usuarioServices:UsuarioService) { }

  ngOnInit(): void {
    this.cargarAlumno();
  }

  cargarAlumno(){
    this.listarAlumnos = this.usuarioServices.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listarAlumnos);
  }

  editarAlumno(elemento:number){
    console.log(elemento);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
