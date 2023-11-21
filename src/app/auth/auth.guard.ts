import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).user? true : false
};

export const notAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).user? false : true
};