import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Course } from '../../models/Course';
import { MOCK_COURSES } from '../../mock-data/mock-courses';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit, OnChanges {
  @Input() courseId: number = 0;
  @Input() courses: Course[] = [];
  @Input() course!: Course;

  constructor(private route: ActivatedRoute) {
    this.courses = MOCK_COURSES;
  }

  getCourseById(courseId: number): void {
    const course = this.courses.find((course) => course.id === courseId);

    if (!!course) {
      this.course = course;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = Number(params.get('courseId'));
    });
    this.getCourseById(this.courseId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCourseById(this.courseId);
  }
}
