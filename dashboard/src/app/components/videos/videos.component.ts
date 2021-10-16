import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  url =
    'https://graph.microsoft.com/v1.0/me/drive/items/01G4CLFVNTQG4FFMF4ZFEJHPZ547XQZD54/children';
  header: any;
  token =
    'eyJ0eXAiOiJKV1QiLCJub25jZSI6InVZTHNFNUZ2YzRJQlljV1VVTHlNVkhmaFlCbkIzZ1Q0RDdkd0ZWTDRLNHMiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MvIiwiaWF0IjoxNjM0NDA4NjM2LCJuYmYiOjE2MzQ0MDg2MzYsImV4cCI6MTYzNDQxMjUzNiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQWtuNkUvdEdZY05MNEgxV1BKV0JPMVBqcEdpQ1RuWXIybHB4SzJUanYzYStMQkxWWWhKRXg1YXZlWkRHVFpxYVdxTWg0SmpWMm9yNFJNcnZodkphelJRPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlY2hub2xvZ2llcyIsImdpdmVuX25hbWUiOiJXb29iYmxyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzYuOTkuMjQ4IiwibmFtZSI6Ildvb2JibHIgVGVjaG5vbG9naWVzIiwib2lkIjoiOWI2ZDAyYjQtMjNkYy00NWNjLTg1MDgtOGU1YTlhZDY3MWQ2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxMEMyMDNENUEiLCJyaCI6IjAuQVhBQWFqbWJVYWZKTWtLTDFlVXRiQ2RvekxYSWk5NzUyYkZJcUsyM1NOcHlVR1J3QUYwLiIsInNjcCI6IkZpbGVzLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik55dndRYzQ3dDlORk15WEgxOHFRQjJPOHhRVU9kTnMwOEh3cGZsNTctdWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ad29vYmJsci5jby5pbiIsInVwbiI6ImluZm9Ad29vYmJsci5jby5pbiIsInV0aSI6Inpfdk4wSHhicTBxcHNEQXVhSWFlQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiR3hVdnBoWlkzTERwSVBiLVdVTnNLNkhLdkFOZGdheG43enhvYVlTejk4MCJ9LCJ4bXNfdGNkdCI6MTYxMDYyMTIxMH0.WLga73VmMHQ4PruvzJP6wFSFWJpyznIy-0MZ1R4RoW3tvhghJrsSLIeRpsS1mdRbfA9x8qjY6eq4-u92oEcN1kkmDeUlYxGhAwPjtBhjXcbnvKElbAxNBN0XF6aeFCqveP8JY4d1NeOx6CHS0Gus0NNOTvnqxm3U0uztazCFPtkxvjMX4ibSTaSTCkNrmgBYl9AXkzijf0q1A9ie7CDYrJAMZIWfBHPWA2LdGPk9h7HZ3HPj56z9skLKEDaDmZRoJTLwTHaWp3jNE1R5gOYu_rJP2OYA7ax3apVpQKJ610XqBNMNrvGSHilMSJQhqg8I4M58_Yy-NeTFBbDQgjDVpQ';
  response: any;
  data: any;
  finalData: any;
  video: any;
  title: any;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders().set('Authorization', this.token);

    this.getData();

    this.print();
  }

  async print() {
    await console.log(this.data);
  }

  async getData() {
    this.http
      .get(this.url, { headers: this.header })
      .toPromise()
      .then((data: any) => {
        this.response = data;
        console.log(this.response);
        this.data = this.response.value.filter((obj) => {
          return obj.file ? obj.file.mimeType === 'video/mp4' : '';
        });
        this.finalData = this.data.map((obj) => {
          return { name: obj.name, url: obj.webUrl };
        });

        // this.video = this.finalData.filter((obj) => {
        //   return obj.webUrl;
        // });
        // this.title = this.finalData.filter((obj) => {
        //   return obj.name;
        // });

        console.log(this.finalData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  ngOnInit(): void {}
}
