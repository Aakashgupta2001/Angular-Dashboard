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
      'eyJ0eXAiOiJKV1QiLCJub25jZSI6InZVNnhxRVM1RjlKU1VCXzYwYTdZWDJtRGllX0JHWmRvX0JMOE1nOFB4WDQiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MvIiwiaWF0IjoxNjM0NDc5NzUxLCJuYmYiOjE2MzQ0Nzk3NTEsImV4cCI6MTYzNDQ4MzY1MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQU9yODM3MjVISGNtSVp3QVR0YUw4dHZYRy96RjBIM1FZaVpyeE42bmhpZHZrKzR4OTQ4ZmNYc1VMcGsrOU1OTEg4ck8yZktUK1VPdXlEMXJKK3B5UVJRPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlY2hub2xvZ2llcyIsImdpdmVuX25hbWUiOiJXb29iYmxyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzYuOTkuMjQ4IiwibmFtZSI6Ildvb2JibHIgVGVjaG5vbG9naWVzIiwib2lkIjoiOWI2ZDAyYjQtMjNkYy00NWNjLTg1MDgtOGU1YTlhZDY3MWQ2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxMEMyMDNENUEiLCJyaCI6IjAuQVhBQWFqbWJVYWZKTWtLTDFlVXRiQ2RvekxYSWk5NzUyYkZJcUsyM1NOcHlVR1J3QUYwLiIsInNjcCI6IkZpbGVzLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik55dndRYzQ3dDlORk15WEgxOHFRQjJPOHhRVU9kTnMwOEh3cGZsNTctdWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ad29vYmJsci5jby5pbiIsInVwbiI6ImluZm9Ad29vYmJsci5jby5pbiIsInV0aSI6Ild2QnpVTkEtYlVheTZ4ajBtS2FBQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiR3hVdnBoWlkzTERwSVBiLVdVTnNLNkhLdkFOZGdheG43enhvYVlTejk4MCJ9LCJ4bXNfdGNkdCI6MTYxMDYyMTIxMH0.j1-kOz7yXO1AjWpW39-bCJFTJxI_unSL2AYSNyCgYo3-wNDOdNbBg1Qv5-g03pfQuJ2K6jD4-sIIDmtNoPWiRenDAzNaSV7eEKW_Mh0oECP5Vp4X924XKCYz1A3WngVUX9NXc6n2yFms3Pc84ksph3pNsrXoWxLavOIBvo7Dq-tZaI1g3P2W5E_LWFelzghuQZOatpDYth4rw61ITbDYRPitcMF3Bz-LHaow2jjWAWuhcgNwe6DV2fHM1NBXDskReqHyosC0wTpgXWPrKbqVYfhRCTv8MqPMNQowF47O3SavOWQbfMkFJcUT2Ecrrbr2f2DW3UjP2TkZVMhzEHAymg';
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
