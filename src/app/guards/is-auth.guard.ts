import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _router = inject(Router);

  if (!_authService.isLoggedIn) {
    _router.navigate(['/authentication/login'], {});
  }

  return _authService.isLoggedIn;
};
