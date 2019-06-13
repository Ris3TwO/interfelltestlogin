import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  datos()
  {
    const httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'adminemail': localStorage.getItem('email'),
          'app': 'APP_BCK',
          'token': localStorage.getItem('token'),
          
        }
      )
    };
    let mail = 'contacto@tuten.cl'
    return this.http.get(`https://dev.tuten.cl:443/TutenREST/rest/user/${mail}/bookings`, httpOptions)
  };
}
