import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  public menu:Menu[];
  modeSidebar:any;
  modeOpen:boolean;
  check:boolean=false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private menuServices:MenuService,
              private router:Router) {}
  
  ngOnInit(): void {
    this.getMenu();
    if(window.innerWidth <= 900){
      this.modeSidebar = 'over';
      this.modeOpen = false;
      this.check = true;
    } else {
      this.modeSidebar = 'side';
      this.modeOpen = true;
      this.check = false;
    }
  }

  getMenu(){
    this.menuServices.getMenu()
      .subscribe(menu => {
        this.menu = menu;
      });
  }

  onResize(event) {
    if(event.target.innerWidth <= 899){
      this.modeSidebar = 'over';
      this.modeOpen = false;
      this.check = true;
    } else {
      this.modeSidebar = 'side';
      this.modeOpen = true;
      this.check = false;
    }
  }

  salir(){
    Swal.fire({
      title: 'APP Colegios',
      text: "¿Está seguro que desea salir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF5350',
      cancelButtonColor: '#7E57C2',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('login');
        Swal.fire({
          title: 'APP Colegio',
          text: 'Solicitud realizada!',
          icon: 'success',
          timer: 1000,
          confirmButtonColor: '#4CAF50',
        })
      }
    })
  }

}
