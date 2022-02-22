import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public siteWebName: string = GlobalConstants.siteWebName;
  public designedBy: string = GlobalConstants.designedBy;
  public poweredBy: string = GlobalConstants.poweredBy;
  public av = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
