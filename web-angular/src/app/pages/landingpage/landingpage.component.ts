import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  public title: string = "Página de Inicio";
  
  constructor() { }

  ngOnInit(): void {
  }

}
