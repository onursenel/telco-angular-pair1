import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostLoginResponse } from '../models/response/post-login-response';
import { GetLoginResponse } from '../models/response/get-login-response';
import { LoginRequest } from '../models/request/register-request';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  //get yapılacak
  //postLogin(login: PostLoginRequest): Observable<PostLoginResponse>{
  //  return this.http.post<PostLoginResponse>(
  //    'http://localhost:3000/users',
  //    login
  //  );
  //}

  getLogin(userInfo: LoginRequest): Observable<GetLoginResponse> {
    return this.http.post<GetLoginResponse>(
      'http://localhost:3000/auth/login',
      userInfo
    );
  }
}
