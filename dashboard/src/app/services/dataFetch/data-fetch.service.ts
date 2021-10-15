import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  postData = {
    name: 'saksham',
    email: 'abc@gmil.com',
    password: '123',
  };

  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/signup';
  json;

  constructor(private htpp: HttpClient) {}
  postUserData() {
    return this.htpp.post(this.url, this.postData);
  }
}
