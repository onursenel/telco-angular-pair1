import { Injectable } from '@angular/core';
import { PostLoginRequest } from '../models/request/post-login-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostLoginResponse } from '../models/response/post-login-response';
import { GetLoginRequest } from '../models/request/get-login-request';
import { GetLoginResponse } from '../models/response/get-login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  //get yapılacak
  postLogin(login: PostLoginRequest): Observable<PostLoginResponse>{
    return this.http.post<PostLoginResponse>(
      'http://localhost:3000/users',
      login
    );
  }

  getLogin(userInfo: GetLoginRequest): Observable<GetLoginResponse> {
    return this.http.post<GetLoginResponse>(
      'http://localhost:3000/auth/login',
      userInfo
    );
  }
}
