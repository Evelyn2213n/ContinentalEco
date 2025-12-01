import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // 🔥 DESACTIVAR AUTENTICACIÓN TEMPORALMENTE
  return true;

  // 🔥 Cuando tengas login real, usas esto:
  /*
  if (!auth.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
  */
};
