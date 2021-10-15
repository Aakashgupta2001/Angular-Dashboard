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
  loggedIn: boolean;
  constructor(
    private http: HttpClient,
    private shared: GlobalServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(data) {
    console.log('is');
    this.shared.setIsLoggedIn(true);
    this.router.navigate(['/']);
  }
}
