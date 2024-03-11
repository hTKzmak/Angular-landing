import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent {
  countInfo = [
    {count: 15, sign: '+', text: 'Years of experience'},
    {count: 100, sign: 'k', text: 'Students worldwide'},
    {count: 45, sign: '+', text: 'Class subjects'},
    {count: 198, sign: '%', text: 'Student satisfactions'},
  ]
}
