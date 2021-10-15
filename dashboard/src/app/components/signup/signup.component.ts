import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from 'src/app/services/dataFetch/data-fetch.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/signup';

  constructor(private http: HttpClient) {}
  onSubmit(data) {
    const json = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    this.http
      .post(this.url, json)
      .toPromise()
      .then((data: any) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {}
}
