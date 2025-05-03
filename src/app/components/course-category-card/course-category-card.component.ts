import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-course-category-card',
  imports: [ButtonComponent],
  standalone: true,
  templateUrl: './course-category-card.component.html',
  styleUrl: './course-category-card.component.css',
})
export class CourseCategoryCardComponent {
  @Input() Title: string = '';
  @Input() Description: string = '';
}
