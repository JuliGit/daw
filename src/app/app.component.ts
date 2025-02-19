import { Component } from '@angular/core';
import { PostsComponent } from './posts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daw-api';
}
