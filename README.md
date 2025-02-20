 # 🚀 Angular Standalone App
 
 ## 📖 Project Overview
 This project is a **fully modular Angular application** built with **Standalone Components**.  
 It follows best practices in **routing, API consumption, state management, UI improvements, and Git collaboration**.
 
 ---
 
 ## 📌 Milestones & Instructions
 
 ### 1️⃣ Create the Angular App & Initialize Git
 
 ```bash
 ng new angular-standalone-app --standalone --routing
 cd angular-standalone-app
 git init
 git add .
 git commit -m "Initial commit: Angular standalone app setup"
 ng serve
 ```
 
 ---
 
 ### 2️⃣ Add a `PostsComponent` to Display API Data
 
 ```bash
 ng generate component posts --standalone
 ```
 
 - Import `PostsComponent` in `app.component.ts`.
 - Modify `posts.component.html` to display a placeholder.
 
 ---
 
 ### 3️⃣ Add a `PostService` to Consume an API
 
 ```bash
 ng generate service post
 ```
 
 - Modify `post.service.ts` to fetch API data.
 - Provide `HttpClientModule` in `app.config.ts`.
 
 ---
 
 ### 4️⃣ Move the Service to a `services/` Folder
 
 ```bash
 mkdir src/app/services
 mv src/app/post.service.ts src/app/services/post.service.ts
 ```
 
 - Update imports in `posts.component.ts`.
 
 ---
 
 ### 5️⃣ Move `PostsComponent` & `PostService` to a `posts/` Module
 
 ```bash
 mkdir src/app/posts
 mv src/app/services/post.service.ts src/app/posts/post.service.ts
 mv src/app/posts.component.ts src/app/posts/posts.component.ts
 ```
 
 - Create `index.ts` inside `posts/` to export both.
 
 ---
 
 ### 6️⃣ Implement Routing
 
 - Create `routes.ts` and define paths:
 
 ```typescript
 import { Routes } from '@angular/router';
 import { PostsComponent } from './posts/posts.component';
 export const routes: Routes = [
   { path: '', component: PostsComponent },
   { path: 'posts', component: PostsComponent }
 ];
 ```
 
 - Provide routing in `app.config.ts`:
 
 ```typescript
 import { provideRouter } from '@angular/router';
 import { routes } from './routes';
 export const appConfig = { providers: [provideRouter(routes)] };
 ```
 
 ---
 
 ### 7️⃣ Improve UI with Angular Material
 
 ```bash
 ng add @angular/material
 ```
 
 - Import `MatCardModule` and `MatButtonModule` in `posts.component.ts`:
 
 ```typescript
 import { MatCardModule } from '@angular/material/card';
 import { MatButtonModule } from '@angular/material/button';
 imports: [MatCardModule, MatButtonModule]
 ```
 
 - Update `posts.component.html` to use Material UI.
 
 ---
 
 ### 8️⃣ Implement Loading Indicators & Error Handling
 
 ```typescript
 isLoading = true;
 hasError = false;
 
 fetchPosts() {
   this.isLoading = true;
   this.postService.getPosts().subscribe({
     next: (data) => { this.posts = data; this.isLoading = false; },
     error: () => { this.hasError = true; this.isLoading = false; }
   });
 }
 ```
 
 ---
 
 ### 9️⃣ Add Pagination to `PostsComponent`
 
 - Modify `post.service.ts`:
 
 ```typescript
 getPosts(limit: number = 5, page: number = 1): Observable<any> {
   const start = (page - 1) * limit;
   return this.http.get<any>(`${this.apiUrl}?_start=${start}&_limit=${limit}`);
 }
 ```
 
 - Add pagination buttons in `posts.component.html`:
 
 ```html
 <button (click)="prevPage()" [disabled]="currentPage === 1">Previous</button>
 <span>Page {{ currentPage }}</span>
 <button (click)="nextPage()">Next</button>
 ```
 
 ---
 
 ### 🔟 Add a Post Details Page
 
 ```bash
 ng generate component post-detail --standalone
 ```
 
 - Define a new route for post details:
 
 ```typescript
 { path: 'post/:id', component: PostDetailComponent }
 ```
 
 - Modify `posts.component.html`:
 
 ```html
 <a [routerLink]="'/post/' + post.id">{{ post.title }}</a>
 ```
 
 ---
 
 ## 🔹 Git Best Practices
 
 ### 🚀 Commit, Push & Merge Policy
 
 ✅ **Use Feature Branches**:
 
 ```bash
 git checkout -b feature/add-login
 ```
 
 ✅ **Write Meaningful Commits**:
 
 ```bash
 git commit -m "Add user authentication"
 ```
 
 ✅ **Push to Feature Branches**:
 
 ```bash
 git push origin feature/add-login
 ```
 
 ✅ **Create a Pull Request (PR) for Merging**  
 ✅ **Use Branch Protection Rules & Required Reviews**
 
 ---
 
 ## 🔹 Enforcing GitHub Policies
 
 ### 🚀 Set Up Branch Protection
 
 1. **Go to your repo** → **Settings** → **Branches**.
 2. Click **"Add branch protection rule"**.
 3. Enable:
    - **✔️ Require PR review before merging**
    - **✔️ Require status checks (CI/CD)**
    - **✔️ Require branches to be up to date**
    - **✔️ Restrict who can push to main**
 
 ---
 
 ## 📢 How to Contribute
 
 1. **Fork this repo**.
 2. **Create a feature branch**:
 
 ```bash
 git checkout -b feature/your-feature
 ```
 
 3. **Commit changes**:
 
 ```bash
 git commit -m "Describe your feature"
 ```
 
 4. **Push the branch**:
 
 ```bash
 git push origin feature/your-feature
 ```
 
 5. **Create a Pull Request (PR) on GitHub**.
 
 ---
 
 ## 📌 Summary
 
 - ✅ **Modular Angular Standalone App**
 - ✅ **Uses API with Pagination & Error Handling**
 - ✅ **Angular Material UI**
 - ✅ **Git Best Practices & GitHub Policies**
 - ✅ **Pull Requests & Branch Protection**
 
 ---
 
 ## 📜 License
 
 This project is licensed under **MIT License**.
 