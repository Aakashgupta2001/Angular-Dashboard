import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalServicesService } from '../services/global-services.service';

@Injectable({
  providedIn: 'root',
})
export class LogInAuthGuard implements CanActivate {
  constructor(private shared: GlobalServicesService, private router: Router) {}

  canActivate(): boolean {
    if (this.shared.getIsLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
