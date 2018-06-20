import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    /**
     * @todo Add proper admin guard based on permissions
     */
    this.router.navigate(['/']);
    return false;
  }
}
