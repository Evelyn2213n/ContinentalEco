import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn || localStorage.getItem('auth') === 'true';
  }
}
