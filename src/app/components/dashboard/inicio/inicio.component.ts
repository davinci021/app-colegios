import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cols:any;
  constructor() { }

  ngOnInit(): void {
    this.cols = (window.innerWidth <= 639) ? 2 : 4;
  }

  onResize(event) {
    this.cols = (event.target.innerWidth <= 640) ? 2 : 4;
  }
  

}
