import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, input } from '@angular/core';

interface carouselImage {
  imageSrc: string | null;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  @Input() indicators: boolean = true;
  images: carouselImage[] = [
    {
      imageSrc: '../../../assets/laptop-learning.jpg',
      imageAlt: 'learning on laptop',
    },
    {
      imageSrc: '../../../assets/library.jpg',
      imageAlt: 'People learning in library',
    },
    { imageSrc: '../../../assets/book.jpg', imageAlt: 'books' },
  ];
  @Input() autoSlide: boolean = false;

  selectedIdx = 0;

  ngOnInit(): void {
    if (this.autoSlide) this.changePicture();
  }

  selectImage(index: number): void {
    this.selectedIdx = index;
  }

  changePicture(): void {
    setInterval(() => {
      if (this.selectedIdx === this.images.length - 1) {
        this.selectedIdx = 0;
      } else {
        this.selectedIdx += 1;
      }
    }, 5000);
  }
}
