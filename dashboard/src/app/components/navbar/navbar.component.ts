import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  check: boolean;
  constructor(private shared: GlobalServicesService) {}

  ngOnInit(): void {
    this.check = this.shared.getIsLoggedIn();
  }

  logOut() {
    this.shared.setIsLoggedIn(false);
    console.log('Logged Out');
  }
}
