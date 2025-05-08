import { CourseCategory } from './CourseCategory';

export interface userRating {
  courseId: number;
  averageRating: number;
  totalRatings: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  price: number;
  courseType: 'Online' | 'Offline';
  seatsAvailable: number | null;
  duration: number;
  categoryId: number;
  instructorId: number;
  startDate: Date;
  endDate: Date;
  category?: CourseCategory;
  userRating?: userRating;
  sessionDetails?: SessionDetails[];
}

export interface UserReviewModel {
  courseId: number;
  userId: number;
  username: string;
  rating: number;
  comments?: string;
  reviewDate: Date;
}

export interface SessionDetails {
  id: number;
  courseId: number;
  title: string;
  description: string;
  videoUrl?: string;
  videoOrder?: number;
}

export interface InstructorModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  biography: string;
  userId: number;
}

export interface CourseDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  courseType: 'Online' | 'Offline';
  seatsAvailable: number;
  duration: number;
  categoryId: number;
  instructorId: number;
  startDate: Date;
  endDate: Date;
  category: CourseCategory;
  userRating: {
    courseId: number;
    averageRating: number;
    totalRatings: number;
  };
  reviews: UserReviewModel[];
  sessionDetails: SessionDetails[];
}
