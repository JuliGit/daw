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

  constructor(private postService:PostService) { }

  posts: any[] = [];
  currentPage = 1;
  limit = 5; // ✅ Number of posts per page
  isLoading = true;
  hasError = false;

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.hasError = false;

    this.postService.getPosts(this.limit, this.currentPage).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.fetchPosts();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPosts();
    }
  }

}

