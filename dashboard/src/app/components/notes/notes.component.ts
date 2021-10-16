import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  url =
    'https://graph.microsoft.com/v1.0/me/drive/items/01G4CLFVM4PJ7LDCSRQJA27ZBMUOEWLCRK/children';
  header: any;
  token: any;
  response: any;
  finalData: any;
  data: any;
  constructor(private http: HttpClient, private shared: GlobalServicesService) {
    this.token = this.shared.oneDriveToken;
    this.header = new HttpHeaders().set('Authorization', this.token);
    this.getData();
  }

  async getData() {
    this.http
      .get(this.url, { headers: this.header })
      .toPromise()
      .then((data: any) => {
        this.response = data;
        console.log(this.response);
        this.data = this.response.value.filter((obj) => {
          return obj.file
            ? obj.file.mimeType ===
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            : '';
        });
        this.finalData = this.data.map((obj) => {
          return { name: obj.name, url: obj.webUrl };
        });

        console.log(this.finalData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {}
}
