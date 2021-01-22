import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse } from '../model/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: [ '' , [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

    console.log('imprime variable a continuacion');
    console.log(this.formLogin.invalid);

  }

  ngOnInit(): void {
  }

  loginClick() {
    const email = this.formLogin.get('email').value;
    const password = this.formLogin.get('password').value;

    //console.log('EMAIL: ', email);
    //console.log ('PASSWORD: ', password);

    const data = new LoginRequest();
    data.email = email;
    data.password = password;

    this.loginService.login(data).subscribe(value => {
      if (value.token) {
        this.router.navigate(['home']);
      }
    },   error => {
      console.log(error);
      //error(objeto de http client).error(objeto)
      alert(error.error.error);
    });
  }
}
