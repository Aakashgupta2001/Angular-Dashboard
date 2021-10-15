import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  isloggedIn: boolean;
  constructor() {
    this.isloggedIn = false;
  }
  setIsLoggedIn(data) {
    console.log(data);
    this.isloggedIn = data;
    console.log(this.isloggedIn);
  }
  getIsLoggedIn() {
    return this.isloggedIn;
  }
}
