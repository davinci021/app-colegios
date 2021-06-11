import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  template: '{{titulo}}',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{
  public titulo:string;
  public titulosSubs$: Subscription;

  constructor(private router : Router) {

    this.titulosSubs$ = this.getArgumentosData()
        // Desentructuracion
        .subscribe( ({titulo}) => {
          this.titulo = titulo;
          document.title = `AppColegios - ${titulo}`;
        })
        // recibiendo  evento
          /* .subscribe( data => {
          this.titulo = data.titulo;
        }) */;
  }
  ngOnDestroy(): void {
    this.titulosSubs$.unsubscribe();
  }

  getArgumentosData(){
    return this.router.events 
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event : ActivationEnd) => event.snapshot.firstChild === null),
        map( (event : ActivationEnd) => event.snapshot.data),
      );
    
  }

}
