import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-category-card',
  imports: [ButtonComponent, RouterLink, CommonModule],
  standalone: true,
  templateUrl: './course-category-card.component.html',
  styleUrl: './course-category-card.component.css',
})
export class CourseCategoryCardComponent {
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() categoryId: number = 0;
  @Input() viewType: 'list' | 'tabs' = 'list';
}
