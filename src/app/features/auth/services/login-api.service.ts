import { Injectable } from '@angular/core';
import { PostLoginRequest } from '../models/request/post-login-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostLoginResponse } from '../models/response/post-login-response';

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

}
