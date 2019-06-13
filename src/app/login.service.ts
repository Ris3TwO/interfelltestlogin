import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(password, email)
  {
    const httpOptions =
    {
      headers: new HttpHeaders(
        {
        'Content-Type': 'application/json',
        'password': password,
        'app': 'APP_BCK'
        }
      )
    };

    return this.http.put(`https://dev.tuten.cl/TutenREST/rest/user/${email}`, null, httpOptions)
  };


}
