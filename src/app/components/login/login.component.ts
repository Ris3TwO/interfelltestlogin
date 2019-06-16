import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* Variables */
  email;
  password;
  token: any;
  constructor(private api: LoginService, private router: Router) { }

  ngOnInit()
  {
  }

  /* Función de inicio de sessión */
  authentication()
  {
    this.api.login(this.password, this.email).subscribe(response => {
      this.token = response;

      if (this.token != null)
      {
        localStorage.setItem('email', this.email);
        localStorage.setItem('token', this.token.sessionTokenBck)
        console.log("¡Token guardado!");
        this.router.navigateByUrl('data')
      }
    }), err =>
    {
      console.log("¡Ocurrió un error al autenticar!", err)
    }
  }

}
