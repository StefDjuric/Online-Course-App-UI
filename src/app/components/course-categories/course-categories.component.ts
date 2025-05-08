import { Component, Input, OnInit } from '@angular/core';
import { CourseCategoryCardComponent } from '../course-category-card/course-category-card.component';
import { CourseCategory } from '../../models/CourseCategory';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-course-categories',
  imports: [CourseCategoryCardComponent, CommonModule],
  standalone: true,
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css',
})
export class CourseCategoriesComponent implements OnInit {
  @Input() categories: CourseCategory[] = [];
  @Input() viewType: 'list' | 'tabs' = 'list';

  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }
  ngOnInit(): void {
    if (this.categories.length === 0) {
      this.getCategories();
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
