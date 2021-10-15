import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  constructor(
    private http: HttpClient,
    private shared: GlobalServicesService
  ) {}

  ngOnInit(): void {}
  onSubmit(data) {
    this.shared.setIsLoggedIn(true);
  }
}
