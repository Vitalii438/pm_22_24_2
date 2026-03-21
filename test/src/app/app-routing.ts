import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'main-content', loadComponent: () => import('./main-content/main-content').then(m => m.MainContent), canActivate: [authGuard] },
  { path: '', redirectTo: '/main-content', pathMatch: 'full' }
];


