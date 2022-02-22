import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/common/posts';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  public post: any = {};

  constructor(
    private route: ActivatedRoute,
    //private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(): void {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.post = Posts.posts.find((post) => post.id == id) || {};
  }
  goBack(): void {
    this.location.back();
  }
  imageExists(image_url: string){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
  }
  isEmptyObject(obj: {}) {
    return Object.keys(obj).length === 0;
  }
}
