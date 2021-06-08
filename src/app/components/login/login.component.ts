import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  loading = false;

  constructor(private fb:FormBuilder, 
              private router:Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    }) 
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario === "davinci021" && password === "123456"){
      //redireccionamos al dashboard
      /* this.router.navigateByUrl('dashboar'); */
      this.fakeLoading();
      this._snackBar.open("Usuario correcto!", 'Ok', {duration:1000});
    } else {
      //Mostramos mensaje de error
      this.error();
    }
  }

  error(){
    this._snackBar.open("Usuario o contraseña son invalidos", '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redireccionar
      this.router.navigate(['dashboard']);
      this.loading = false;
    }, 2000)
  }
}
