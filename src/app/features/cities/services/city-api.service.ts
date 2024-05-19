import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCityRequest } from '../models/request/post-city-request';
import { PostCityResponse } from '../models/response/post-city-response';
import { CityListResponse } from '../models/response/city-list-response';
import { GetListResponse } from '../../../shared/models/get-list-response';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

  constructor(private http: HttpClient) { }

  postCity(city: PostCityRequest): Observable<PostCityResponse>{
    return this.http.post<PostCityResponse>(
      'http://localhost:3000/cities',
      city
    );
  }
  getList(): Observable<GetListResponse<CityListResponse>>{
    return this.http.get<GetListResponse<CityListResponse>>(
      'http://localhost:8081/customerservice/api/v1/cities/getAll?page=0&size=100',
    )
  }

}
