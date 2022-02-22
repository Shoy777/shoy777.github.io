import { Component, OnInit, Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Array<any> = [];
  public globalConstants: GlobalConstants = new GlobalConstants();

  constructor() {}

  ngOnInit(): void {
    this.projects = this.globalConstants.projects.sort((a, b) => b.id - a.id);
  }

}
