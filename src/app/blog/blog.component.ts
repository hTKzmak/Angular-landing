import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogInfo = [
    { image: '/assets/img1.png', user: 'Tom Kennedy', data: 'Feb 23, 2024', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: '/assets/img2.png', user: 'Tom Kennedy', data: 'Feb 23, 2024', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: '/assets/img3.png', user: 'Tom Kennedy', data: 'Feb 23, 2024', text: 'Lorem ipsum dolor sit amet consectetur.' },
  ]
}