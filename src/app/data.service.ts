import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  email;
  token: any;

  constructor(private http: HttpClient) { }

  datos(email, token)
  {
    const httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'adminemail': `${email}`,
          'app': 'APP_BCK',
          'token': localStorage.getItem(this.token.sessionTokenBck)
        }
      )
    };

    return this.http.get(`https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings`, httpOptions)
  };
}
