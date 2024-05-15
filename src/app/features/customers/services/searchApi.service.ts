import { SearchRequest } from './../models/search/search-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(private http: HttpClient) { }

  getSearchResult(searchRequest: SearchRequest): Observable<SearchResponse[]> {
    let httpParams = new HttpParams();
    for (let key in searchRequest) {
      if (searchRequest[key]) {
        httpParams = httpParams.set(key, searchRequest[key])
      }
    }

    return this.http.get<SearchResponse[]>(
      'http://localhost:8082/api/v1/search-service',
      { params: httpParams }
    );
  }

  getAllCustomers(): Observable<any> {

    return this.http.get<any>(
      'http://localhost:8082/api/v1/search-service/getAll',

    );
  }
}
