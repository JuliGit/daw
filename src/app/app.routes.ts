import { Routes } from '@angular/router';
import { PostsComponent } from './posts';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route (Home)
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostDetailComponent}
];
