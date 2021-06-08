import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menu:Menu[];

  constructor(private menuServices:MenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.menuServices.getMenu()
      .subscribe(menu => {
        this.menu = menu;
      });
  }
  
}
