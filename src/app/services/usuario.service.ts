import { Injectable } from '@angular/core';
import { Alumnos } from '../components/dashboard/usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listado_alumnos: Alumnos[] = [
    {position: 1, nombre: 'David', apellido: "Zamorano Nieto", S1_S: 5.1, S1_E: 0},
    {position: 2, nombre: 'Pedro', apellido: "Nieto Cabello", S1_S: 4.0, S1_E: 0},
    {position: 3, nombre: 'Jose', apellido: "Cabello Zamorano", S1_S: 3.1, S1_E: 0},
    {position: 4, nombre: 'Carlos', apellido: "Muñoz Zambrano", S1_S: 2.0, S1_E: 0},
    {position: 5, nombre: 'Franco', apellido: "Alejos Rios", S1_S: 7.0, S1_E: 0},
    {position: 6, nombre: 'Raquel', apellido: "Cabrera Retamal", S1_S: 5.8, S1_E: 0},
    {position: 7, nombre: 'Monica', apellido: "Zambrano Muñoz", S1_S: 6.3, S1_E: 0},
    {position: 8, nombre: 'Nahuel', apellido: "Gonzalez Alejos", S1_S: 6.5, S1_E: 0},
    {position: 9, nombre: 'Pedrito', apellido: "Rios Gonzalez", S1_S: 5.1, S1_E: 0},
    {position: 10, nombre: 'Juan', apellido: "Retamal Cabrera", S1_S: 6.8, S1_E: 0},
  ];

  constructor() { }

  getUsuarios(){
    return this.listado_alumnos.slice();
  }
}
