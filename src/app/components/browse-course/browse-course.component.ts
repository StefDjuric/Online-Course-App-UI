import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Course } from '../../models/Course';
import { MOCK_COURSES } from '../../mock-data/mock-courses';

@Component({
  selector: 'app-browse-course',
  imports: [CommonModule, ButtonComponent],
  standalone: true,
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css',
})
export class BrowseCourseComponent {
  courses: Course[] = [];

  constructor() {
    this.courses = MOCK_COURSES;
  }

  formatPrice(price: number) {
    return `${price.toFixed(2)}`;
  }
}
