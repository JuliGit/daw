import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService } from './image.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImagesComponent implements OnInit {
  images: any[] = [];
  currentPage = 1;
  perPage = 10;
  isLoading = true;
  hasError = false;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.isLoading = true;
    this.hasError = false;
    this.imagesService.getImages(this.currentPage, this.perPage).subscribe({
      next: (data) => {
        this.images = data;
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
    this.fetchImages();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchImages();
    }
  }
}
