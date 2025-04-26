import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() styling: string = '';
  @Input() IconSrc: string | null = null;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled) this.clicked.emit(event);
  }
}
