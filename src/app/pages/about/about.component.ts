import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service'; // ✅ correct path

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let post of posts">
        {{ post.title.rendered }}
      </li>
    </ul>
  `,
})
export class AboutComponent implements OnInit {
  private postService = inject(PostService);
  posts: any[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
