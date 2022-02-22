import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  public miPerfil = GlobalConstants.miPerfil;
  public tecnologias = GlobalConstants.tecnologias;
  public designedBy = GlobalConstants.designedBy;
  public poweredBy = GlobalConstants.poweredBy;

  constructor() { }

  ngOnInit(): void {
  }

}
