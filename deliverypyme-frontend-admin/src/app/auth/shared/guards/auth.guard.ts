import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLoggin = this.authService.isLogginValue;
    if (isLoggin) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
