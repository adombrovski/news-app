import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '178ce9f0957a49aca478afe80e7cf77f';

  constructor() {
  }

  ProceedLogin() {
    return {token: this.token};
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') || '';
  }
}
