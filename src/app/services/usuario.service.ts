import { Injectable } from '@angular/core';
import { Alumnos } from '../components/dashboard/usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listado_alumnos: Alumnos[] = [
    {position: 1, nombre: 'David', apellido: "Zamorano Nieto", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 2, nombre: 'Pedro', apellido: "Nieto Cabello", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 3, nombre: 'Jose', apellido: "Cabello Zamorano", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 4, nombre: 'Carlos', apellido: "Muñoz Zambrano", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 5, nombre: 'Franco', apellido: "Alejos Rios", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 6, nombre: 'Raquel', apellido: "Cabrera Retamal", sexo: 'F', fec_nac: '1991-06-09'},
    {position: 7, nombre: 'Monica', apellido: "Zambrano Muñoz", sexo: 'F', fec_nac: '1991-06-09'},
    {position: 8, nombre: 'Nahuel', apellido: "Gonzalez Alejos", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 9, nombre: 'Pedrito', apellido: "Rios Gonzalez", sexo: 'M', fec_nac: '1991-06-09'},
    {position: 10, nombre: 'Juan', apellido: "Retamal Cabrera", sexo: 'M', fec_nac: '1991-06-09'},
  ];

  constructor() { }

  getUsuarios(){
    return this.listado_alumnos.slice();
  }
}
