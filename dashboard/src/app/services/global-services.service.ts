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
      'eyJ0eXAiOiJKV1QiLCJub25jZSI6IldHOEMzaVdBa1M3a3BNUUZlNGtpS3hBbU9oZ1owVjYya3k2X3c5ZHUtbWciLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MvIiwiaWF0IjoxNjM0OTY0NTA3LCJuYmYiOjE2MzQ5NjQ1MDcsImV4cCI6MTYzNDk2ODQwNywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQTFIeHh0MVdXL09KN1p0TGlZVUZMdWZZckNHeW1FR0QzV3FDOXJWblpld0loZjhENWQ0NElxTGgwaVlRUUFVYmdFeDdBZEl4MVlaYmN5cjR5aE1HbWFBPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlY2hub2xvZ2llcyIsImdpdmVuX25hbWUiOiJXb29iYmxyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzYuOTkuMjQ4IiwibmFtZSI6Ildvb2JibHIgVGVjaG5vbG9naWVzIiwib2lkIjoiOWI2ZDAyYjQtMjNkYy00NWNjLTg1MDgtOGU1YTlhZDY3MWQ2IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxMEMyMDNENUEiLCJyaCI6IjAuQVhBQWFqbWJVYWZKTWtLTDFlVXRiQ2RvekxYSWk5NzUyYkZJcUsyM1NOcHlVR1J3QUYwLiIsInNjcCI6IkZpbGVzLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Ik55dndRYzQ3dDlORk15WEgxOHFRQjJPOHhRVU9kTnMwOEh3cGZsNTctdWsiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI1MTliMzk2YS1jOWE3LTQyMzItOGJkNS1lNTJkNmMyNzY4Y2MiLCJ1bmlxdWVfbmFtZSI6ImluZm9Ad29vYmJsci5jby5pbiIsInVwbiI6ImluZm9Ad29vYmJsci5jby5pbiIsInV0aSI6IjVKYS1fZVhKX2ttVUtIWmJaVEJzQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiR3hVdnBoWlkzTERwSVBiLVdVTnNLNkhLdkFOZGdheG43enhvYVlTejk4MCJ9LCJ4bXNfdGNkdCI6MTYxMDYyMTIxMH0.OanxQGXisDVZOUyivAkX8mWyWpGmDNYUtrhUt_Yj-wC1Si0uy52zEuOD0goOJ53nCSlTsjmXaI3RCMQh7OGrrVVn5osk88gVzODZ-SFyqNJ-HQEAu7Ag8sfiKpT28hADpojYIy6CnyshPID4noU7tXcYsLfXXj-tHGqsn4Am_y2xAHL9khhjZBc9SKndEt1EMBezkteUJBwHr8BvNlXj0QmmGCZXW3VJHbLWlhh4cJurmYRRZYXA-J-hOg2iUkgOkgktUed1IWvjV8wT0_GhBpN3tViIyhfhV1YtYPYE0PuX1_llw-YiMj1tdPCagaJ9N1q51gLCYq8H_u3Kypg7nw';
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
