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
    this.isloggedIn = data;
  }
  getIsLoggedIn() {
    return this.isloggedIn;
  }
}
