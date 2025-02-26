import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  private apiUrl = 'https://api.unsplash.com/photos';
  private accessKey = environment.UNSPLASH_ACCESS_KEY;

  constructor(private http: HttpClient) {}

  getImages(page: number = 1, perPage: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?client_id=${this.accessKey}&page=${page}&per_page=${perPage}`);
  }
}
