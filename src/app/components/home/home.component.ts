import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
