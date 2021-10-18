import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/login';
  loggedIn: boolean;
  constructor(
    private http: HttpClient,
    private shared: GlobalServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(data) {
    const json = {
      email: data.email,
      password: data.password,
    };
    this.http
      .post(this.url, json)
      .toPromise()
      .then((data: any) => {
        this.shared.setIsLoggedIn(true);
        this.router.navigate(['/home']);
        localStorage.setItem('authorization', data.token);
        window.location.reload()

        console.log(data);
      })
      .catch((err) => {
        alert(err.error);
        console.log('err=', err);
      });
  }
}
