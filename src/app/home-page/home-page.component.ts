import {Component, OnInit} from '@angular/core';
import {GetPostsService, IPost} from "../services/get-posts.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  posts: IPost[] = [];

  constructor(private postService: GetPostsService) {

  }
  ngOnInit() {
    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    })
  }
}
