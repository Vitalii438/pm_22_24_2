import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  if (loggedIn) {
    return true; 
  } else {
    return false;
  }
};

