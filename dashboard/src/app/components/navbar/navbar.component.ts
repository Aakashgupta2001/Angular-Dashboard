import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  check: boolean;
  constructor(private shared: GlobalServicesService, private router: Router) {}

  ngOnInit(): void {
    this.check = this.shared.getIsLoggedIn();
  }
  navCheck() {
    return this.shared.getIsLoggedIn();
  }

  logOut() {
    localStorage.removeItem('authorization');
    this.shared.setIsLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
