import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalServicesService } from '../services/global-services.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
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
    if(this.shared.getIsLoggedIn()){
      console.log("is logged in = ",this.shared.getIsLoggedIn())
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
