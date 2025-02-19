import { Component } from '@angular/core';
import { PostService } from './post.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, MatToolbarModule, MatCardModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postService:PostService) { }

  isLoading = true;
hasError = false;

ngOnInit(): void {
  this.postService.getPosts().subscribe({
    next: (data) => {
      this.posts = data;
      this.isLoading = false;
      console.log(data);
    },
    error: () => {
      this.hasError = true;
      this.isLoading = false;
    }
  });
}

}
