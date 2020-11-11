import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RegisterResponseEntity} from '../../entities/response/register-response-entity';
import {LoginResponseEntity} from '../../entities/response/login-response-entity';
import {SimpleResponseEntity} from '../../entities/response/simple-response-entity';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  public user = {
    firstName: 'Alexander',
    lastName: 'Pierce',
    image: 'assets/img/user2-160x160.jpg',
  };


  private registerResponse: RegisterResponseEntity = new RegisterResponseEntity();

  private loginResponse: LoginResponseEntity = new LoginResponseEntity();

  private apiUrl = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient) {
  }

  login(loginForm: FormGroup) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiUrl}/auth`, loginForm.value).toPromise()
        .then((data: LoginResponseEntity) => {
          this.loginResponse = data;
          localStorage.setItem('access-token', this.loginResponse.accessToken);
          localStorage.setItem('refresh-token', this.loginResponse.refreshToken);
          resolve();
        }, (error: HttpErrorResponse) => {
          this.loginResponse.message = error.error.message;
          this.loginResponse.status = error.error.status;
          resolve();
        });
    });
  }

  register(registerForm: FormGroup) {
    return new Promise((resolve, reject) => {
        this.http.post(`${this.apiUrl}/auth/registration`, registerForm.value).toPromise()
          .then((data: RegisterResponseEntity) => {
            this.registerResponse = data;
            resolve();
          }, (error: HttpErrorResponse) => {
            this.registerResponse.status = error.error.status;
            this.registerResponse.message = JSON.stringify(error.error.message);
            resolve();
          });
    });
  }

  confirm(confirmToken: string): void {
    this.http.put(`${this.apiUrl}/auth/confirm/${confirmToken}`, {})
      .subscribe((data: SimpleResponseEntity) => {
        if (data.status === 'success') {
          this.router.navigate(['/login']);
        }
      });
  }

  logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    this.router.navigate(['/login']);
  }

  public getRegisterResponse(): RegisterResponseEntity {
    return this.registerResponse;
  }

  public getLoginResponse(): LoginResponseEntity {
    return this.loginResponse;
  }
}
