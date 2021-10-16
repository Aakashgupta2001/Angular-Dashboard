import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  isloggedIn: boolean;
  token: any;
  header: any;
  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/verify';
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('authorization');
    this.header = new HttpHeaders().set('authorization', this.token);

    if (!this.token) {
      this.isloggedIn = false;
    } else {
      this.http
        .get(this.url, { headers: this.header })
        .toPromise()
        .then((data: any) => {
          this.isloggedIn = true;
          console.log(data);
        })
        .catch((err) => {
          this.isloggedIn = false;
          console.log(err);
        });
    }
  }
  setIsLoggedIn(data) {
    this.isloggedIn = data;
  }
  getIsLoggedIn() {
    return this.isloggedIn;
  }
}
