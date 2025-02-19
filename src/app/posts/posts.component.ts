import { Component } from '@angular/core';
import { PostService } from './post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data:any[]) => {
      console.log(data);
      this.posts = data;
    });
  }

}
