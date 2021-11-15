import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // read the token from localStorage
    const token = localStorage.getItem('token');
    // decode the token
    const userDetails = localStorage.getItem('userDetails');
    const exp = JSON.parse(userDetails || '').exp;
    console.log(JSON.parse(userDetails || '').exp);
    // check the expiry of the token
    if (request.url.includes('login') || request.url.includes('register')) {
      return next.handle(request);
    }
    if (Date.now() > exp / 1000) {
      console.log('token is valid');
      request = request.clone({
        headers: request.headers.set('authorization', token || ''),
      });
      return next.handle(request);
    } else {
      this.router.navigate(['/users/login']);
      return next.handle(request);
    }
    // if it not expired then allowed
    // if the token is expired then go back to the login and get the token
  }
}
