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
          'Accept':'application/json',
          'Content-Type': 'application/json',
          'App': 'APP_BCK',     
          'adminemail': localStorage.getItem('email'),
          'token': localStorage.getItem('token'),
          
        }
      )
    };
    let mail = 'contacto@tuten.cl'
    return this.http.get(`https://dev.tuten.cl:443/TutenREST/rest/user/${mail}/bookings?current=true`, httpOptions)
  };



  
}
