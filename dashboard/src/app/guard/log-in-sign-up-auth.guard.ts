import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalServicesService } from '../services/global-services.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInSignUpAuthGuard implements CanActivate {
  isloggedIn: boolean;
  token: any;
  header: any;

  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/verify';
  constructor(
    private http: HttpClient,
    private shared: GlobalServicesService,
    private router: Router
  ) {
    this.token = localStorage.getItem('authorization');
    this.header = new HttpHeaders().set('authorization', this.token);
  }

  canActivate(): boolean {
    if (!this.token) {
      return true;
    }
    else{
      this.http
        .get(this.url, { headers: this.header })
        .toPromise()
        .then((data: any) => {
          this.isloggedIn = true;
          this.router.navigate(["/home"])
        })
        .catch((err) => {
          this.isloggedIn = false;
        });
        return false
    }

  }
}
