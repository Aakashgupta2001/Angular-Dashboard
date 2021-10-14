import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  constructor(public isLoggedIn: boolean = true) {}

  loggedIn() {
    return this.isLoggedIn;
  }
}
