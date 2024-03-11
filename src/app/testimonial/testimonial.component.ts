import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  testimonialInfo = [
    { user: 'Michael Wong', job: 'UI/UX Design Student', rating: 4.9, text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { user: 'Avril Song', job: 'Web Development Student', rating: 4.8, text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { user: 'Jeane Wood', job: 'Data Science Student', rating: 5.0, text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
  ]
}
