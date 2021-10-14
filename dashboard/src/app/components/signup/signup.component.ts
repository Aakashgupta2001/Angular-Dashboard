import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/services/dataFetch/data-fetch.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  json;
  constructor(private user: DataFetchService) {
    this.user
      .postUserData()
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.json = data.json;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {}
}
