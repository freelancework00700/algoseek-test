import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Task1Component } from './task-1/task-1.component';
import { Task2Component } from './task-2/task-2.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'task-1', component: Task1Component },
  { path: 'task-2', component: Task2Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/home' }, // wildcard route (optional)
];
