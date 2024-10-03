import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {CheckInComponent} from './registration/components/check-in/check-in.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registration/event-check-ins/new', component: CheckInComponent },
  { path: '**', component: PageNotFoundComponent }
];
