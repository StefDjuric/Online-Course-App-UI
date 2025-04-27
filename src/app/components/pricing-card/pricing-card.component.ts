import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-pricing-card',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent {
  @Input() planName: string = '';
  @Input() price: string = '';
  @Input() planPerks: Array<string> = [];
  @Input() planColorStyling: string = '';
}
