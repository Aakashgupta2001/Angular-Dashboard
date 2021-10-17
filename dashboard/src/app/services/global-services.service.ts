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
      'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkMteWJ3TTNuY2tpNk5wWVVwT0JmQW9BT0lmSTJ4aDRGWjZVbHl1QXRZY00iLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MvIiwiaWF0IjoxNjM0NDkyMjc3LCJuYmYiOjE2MzQ0OTIyNzcsImV4cCI6MTYzNDQ5NjE3NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQU51MThrTEdQaCtFZ2ZJV2RrR3U3WkRxNm4veHZTQ1lBOEhXYldQd3FvOE9laVp5S3dPK3BRckdGVWNVSEpZRkJwYmg1bXp6bHovSkdOVS80TUltWWxRPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlY2hub2xvZ2llcyIsImdpdmVuX25hbWUiOiJXb29iYmxyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzYuOTkuMjQ4IiwibmFtZSI6Ildvb2JibHIgVGVjaG5vbG9naWVzIiwib2lkIjoiOWI2ZDAyYjQtMjNkYy00NWNjLTg1MDgtOGU1YTlhZDY3MWQ2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxMEMyMDNENUEiLCJyaCI6IjAuQVhBQWFqbWJVYWZKTWtLTDFlVXRiQ2RvekxYSWk5NzUyYkZJcUsyM1NOcHlVR1J3QUYwLiIsInNjcCI6IkZpbGVzLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik55dndRYzQ3dDlORk15WEgxOHFRQjJPOHhRVU9kTnMwOEh3cGZsNTctdWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ad29vYmJsci5jby5pbiIsInVwbiI6ImluZm9Ad29vYmJsci5jby5pbiIsInV0aSI6ImRrMVVrSVppNUVPcV9MZXBKSWZBQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiR3hVdnBoWlkzTERwSVBiLVdVTnNLNkhLdkFOZGdheG43enhvYVlTejk4MCJ9LCJ4bXNfdGNkdCI6MTYxMDYyMTIxMH0.XxsnuVKncWWLT9rcGXUuLl6-oTXtOyFYGBQsOTj7g3Yo9lMgLYJ_zYlxfnHyxreMaCoAOlU4ToECiAxT3cmldvNlokVbWxvNaBkkoLZxhrW_XtFb6WGscKtIGGqVw47wulLdWXTA53XkfnzdzDOxLHETgcuOv-93SrbjDn6Msk4QNp6vGDVg5IlnWh95vq4s7i58niE509P1ZlAewlN9GeShDkYOVIhHFoeXtIESjWCRzQ61ryhta7q8oZpcL-Rj98U2lUNsC3IaPfo4pg2ACcu3vzSRb-CxktuhVq_Vkg76ipVACRu7kFQmg1C889bjm7QaupX33o3QKBLfQmM7iw';
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
