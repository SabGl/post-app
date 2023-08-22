import { Component, Input } from '@angular/core';
import {IPost} from "../../../services/get-posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post!: IPost;

}
