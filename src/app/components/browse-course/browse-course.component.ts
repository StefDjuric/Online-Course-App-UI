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
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';

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

  constructor(private courseService: CourseService) {}

  processCourse() {
    this.getCourseByCategory(this.categoryId);
  }

  getCourseByCategory(categoryId: number) {
    if (categoryId === 0) this.getAllCourses();
    else {
      this.courseService
        .getCoursesByCategoryId(categoryId)
        .subscribe((data) => {
          this.courses = data;
          console.log('DAta is ', this.courses);
        });
    }
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
      console.log('DAta is ', this.courses);
    });
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
