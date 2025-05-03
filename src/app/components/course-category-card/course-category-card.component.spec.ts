import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoryCardComponent } from './course-category-card.component';

describe('CourseCategoryCardComponent', () => {
  let component: CourseCategoryCardComponent;
  let fixture: ComponentFixture<CourseCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCategoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
