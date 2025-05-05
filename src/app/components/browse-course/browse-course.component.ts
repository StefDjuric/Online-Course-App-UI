import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Course } from '../../models/Course';
import { MOCK_COURSES } from '../../mock-data/mock-courses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-browse-course',
  imports: [CommonModule, ButtonComponent, RouterLink],
  standalone: true,
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css',
})
export class BrowseCourseComponent implements OnInit, OnChanges {
  courses: Course[] = [];
  @Input() categoryId: number = 0;

  constructor() {
    this.courses = MOCK_COURSES;
  }

  processCourse() {
    this.getCourseByCategory(this.categoryId);
  }

  getCourseByCategory(categoryId: number) {
    if (categoryId === 0) return;
    this.courses = MOCK_COURSES.filter(
      (course) => course.categoryId === categoryId
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.processCourse();
  }
  ngOnInit(): void {
    this.processCourse();
  }

  formatPrice(price: number) {
    return `${price.toFixed(2)}`;
  }
}
