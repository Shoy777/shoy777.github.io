import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/common/posts';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public posts: Array<any> = Posts.posts;

  constructor() { }

  ngOnInit(): void {
  }
  imageExists(image_url: string){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
  }

}
