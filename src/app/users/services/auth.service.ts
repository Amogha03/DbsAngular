import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { Login } from '../models/login';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '/api/users/';

  constructor(private httpClient: HttpClient) {}

  registerUser(register: Register): Observable<any> {
    return this.httpClient.post(this.url + 'register', register, headerOptions);
  }
  loginUser(login: Login): Observable<any> {
    return this.httpClient.post(this.url + 'login', login);
  }
}
