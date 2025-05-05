import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowseCourseComponent } from './components/browse-course/browse-course.component';
import { CoursesByCategoryComponent } from './components/courses-by-category/courses-by-category.component';
import { CourseCategoriesComponent } from './components/course-categories/course-categories.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'course/browse', component: BrowseCourseComponent },
  {
    path: 'course/category/:categoryId',
    component: CoursesByCategoryComponent,
  },
  {
    path: 'course/category',
    component: CourseCategoriesComponent,
  },
  {
    path: 'course/course-details/:courseId',
    component: CourseDetailsComponent,
  },
];
