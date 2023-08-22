import {Component, OnInit, Output} from '@angular/core';
import {GetPostsService, IPost} from "../services/get-posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit{
  postId!: number
  post!: IPost;

  constructor( private route: ActivatedRoute, private postService: GetPostsService) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id !== null){
      this.postId= +id;
      this.getPost(this.postId);
      }
    });
  }

  getPost(id: number){
    this.postService.getPost(id).subscribe(value => {
      this.post = value;
    });
  }

}
