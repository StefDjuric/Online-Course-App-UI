import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { BrowseCourseComponent } from './components/browse-course/browse-course.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'plans-and-pricing', component: PricingCardComponent },
  { path: 'course/browse', component: BrowseCourseComponent },
];
