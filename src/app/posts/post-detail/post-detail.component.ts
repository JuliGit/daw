import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})

export class PostDetailComponent implements OnInit {
  postId: number | null = null;
  post: any | null = null;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private postService:PostService, private router:Router) {}

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.postId) {
      this.postService.getPostById(this.postId).subscribe({
        next: (data) => {
          this.post = data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}
