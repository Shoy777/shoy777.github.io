import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public resumeSummary: string = GlobalConstants.resumeSummary;
  public resumeSummary2: string = GlobalConstants.resumeSummary2;

  constructor() { }

  ngOnInit(): void {
  }

}
