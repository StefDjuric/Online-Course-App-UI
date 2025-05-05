import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowseCourseComponent } from '../browse-course/browse-course.component';

@Component({
  selector: 'app-courses-by-category',
  imports: [BrowseCourseComponent],
  templateUrl: './courses-by-category.component.html',
  styleUrl: './courses-by-category.component.css',
})
export class CoursesByCategoryComponent implements OnInit {
  categoryId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = Number(params.get('categoryId'));
    });
  }
}
