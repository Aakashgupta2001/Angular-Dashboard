import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  isloggedIn: boolean;
  token: any;
  oneDriveToken: any;
  header: any;
  userName: string;
  url = 'https://angular-dashboard-vap.herokuapp.com/api/v1/user/verify';
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('authorization');
    this.header = new HttpHeaders().set('authorization', this.token);

    this.oneDriveToken =
      'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjNGLUFCZlZsUThLOTY2YjhyQmJGa25pQnlLOGxNYzUyUmhtUnlRNWc3azgiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MvIiwiaWF0IjoxNjM0NTU4NDA4LCJuYmYiOjE2MzQ1NTg0MDgsImV4cCI6MTYzNDU2MjMwOCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQVpYMUk5NlE3N1prRExUUjhQZHUxTWIyOHQ5TW9LNXJaSi9EQlVVU0ozZ0pubVQxYk14TElzNFRRSkJKTkthR1FBdDdiTkUwNmt3NzViWkdMUTFYWUx3PT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlY2hub2xvZ2llcyIsImdpdmVuX25hbWUiOiJXb29iYmxyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzYuOTkuMjQ4IiwibmFtZSI6Ildvb2JibHIgVGVjaG5vbG9naWVzIiwib2lkIjoiOWI2ZDAyYjQtMjNkYy00NWNjLTg1MDgtOGU1YTlhZDY3MWQ2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxMEMyMDNENUEiLCJyaCI6IjAuQVhBQWFqbWJVYWZKTWtLTDFlVXRiQ2RvekxYSWk5NzUyYkZJcUsyM1NOcHlVR1J3QUYwLiIsInNjcCI6IkZpbGVzLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik55dndRYzQ3dDlORk15WEgxOHFRQjJPOHhRVU9kTnMwOEh3cGZsNTctdWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ad29vYmJsci5jby5pbiIsInVwbiI6ImluZm9Ad29vYmJsci5jby5pbiIsInV0aSI6InF3Z18tOHJDSkVTNnFsX3plZjc0QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiR3hVdnBoWlkzTERwSVBiLVdVTnNLNkhLdkFOZGdheG43enhvYVlTejk4MCJ9LCJ4bXNfdGNkdCI6MTYxMDYyMTIxMH0.NcYM9phezI00CJy4YLbTGXqJLY1VNKoOlg-wJQvw7lNcRDpzYgrEoyD3gT7VsbK3Coft6c6YFMHRg7zGpZ8pN3bDH14rvHI-8LIOmYShItbH8mAC2-GSY30t6aJ53A0wIh4jtmzNNod1oQRYqctJCGXPyrYeUvVoFJUtvw3mfU-1DwTWvx3S_TZMC9lhNFh-GFzMQ5HEokPdxbowkGZyAHk-awNogQwPDsAqonKMk_J2mQ6AzhK6HP2hl2d4ehoK_fMf6eqs-Sqs7tpvnZydHo6NqgmMXZXzdUlplE4ya322UiX5ETcWKyH0DBmEHZnwZStZJWr8qt-uZbRA3_Ezzg';
    if (!this.token) {
      this.isloggedIn = false;
    } else {
      this.http
        .get(this.url, { headers: this.header })
        .toPromise()
        .then((data: any) => {
          this.isloggedIn = true;
          this.userName = data.name;
        })
        .catch((err) => {
          this.isloggedIn = false;
          console.log(err);
        });
    }
  }
  setIsLoggedIn(data) {
    this.isloggedIn = data;
  }
  getIsLoggedIn() {
    return this.isloggedIn;
  }
}
