import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: number;

  constructor(private shared: GlobalServicesService) {
    // this.videos = this.shared.noOfVideos;
    console.log(this.videos);
  }

  ngOnInit(): void {}
}
