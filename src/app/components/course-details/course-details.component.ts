import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Course } from '../../models/Course';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit, OnChanges {
  @Input() courseId: number = 0;
  @Input() course!: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  getCourseById(courseId: number): void {
    this.courseService.getCourseDetails(courseId).subscribe((data) => {
      this.course = data;
      console.log('Data is: ', this.course);
    });
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
