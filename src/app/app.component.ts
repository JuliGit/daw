import { Component } from '@angular/core';
import { PostModule } from './posts/post.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daw-api';
}
