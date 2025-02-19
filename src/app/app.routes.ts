import { Routes } from '@angular/router';
import { PostsComponent } from './posts';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route (Home)
      { path: 'posts', component: PostsComponent },
    //  { path: 'post/:id', component: PostDetailComponent } // Post Details Page
];
