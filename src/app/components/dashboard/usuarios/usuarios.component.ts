import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface Usuario {
  nombre: string;
  apellido: string;
  position: number;
  sexo: string;
  fec_nac: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listarUsuario: Usuario[] = [];
  
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'Sexo', 'Fecha Nacimiento', 'acciones'];
  dataSource = new MatTableDataSource();

  constructor(private usuarioServices:UsuarioService) { }

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
