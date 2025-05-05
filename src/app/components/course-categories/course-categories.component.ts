import { Component, Input, OnInit } from '@angular/core';
import { CourseCategoryCardComponent } from '../course-category-card/course-category-card.component';
import { CourseCategory } from '../../models/CourseCategory';
import { MOCK_COURSE_CATEGORIES } from '../../mock-data/mock-course-categories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-categories',
  imports: [CourseCategoryCardComponent, CommonModule],
  standalone: true,
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css',
})
export class CourseCategoriesComponent {
  @Input() categories: CourseCategory[] = [];
  @Input() viewType: 'list' | 'tabs' = 'list';

  constructor() {
    this.categories = MOCK_COURSE_CATEGORIES;
  }
}
