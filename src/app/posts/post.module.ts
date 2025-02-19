import { CommonModule } from "@angular/common";
import { PostService } from "./post.service";
import { PostsComponent } from "./posts.component";

export const PostModule = {
  declarations: [PostsComponent],
  providers: [PostService],
  imports: [CommonModule]
};