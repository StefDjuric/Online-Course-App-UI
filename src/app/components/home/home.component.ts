import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from '../button/button.component';
import { PricingCardComponent } from '../pricing-card/pricing-card.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, ButtonComponent, PricingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  basicPlanPerks = [
    'Mogućnost pristupa 10 kurseva',
    'Podrška zajednice',
    'Pristup preko mobilnog uređaja',
  ];

  proPlanPerks = [
    'Sve pogodnosti iz osnovnog plana',
    'Pristup svim kursevima',
    'Prioritetna podrška',
    'Offline pristup',
    'Ekskluzivni kursevi',
  ];

  premiumPlanPerks = [
    'Sve pogodnosti iz pro plana',
    'Mentorstvo jedan na jedan',
    'Pristup premijum kursevima',
    'Rani pristup novom sadržaju',
  ];
}
