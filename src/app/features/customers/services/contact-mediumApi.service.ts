import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListResponse } from '../../../shared/models/get-list-response';
import { ContactMediumListResponse } from '../models/contact-medium/contact-medium-list-response';
import { CreateContactMediumRequest } from '../models/contact-medium/create-contact-medium-request';
import { CreateContactMediumResponse } from '../models/contact-medium/create-contact-medium-response';
import { UpdateContactMediumRequest } from '../models/contact-medium/update-contact-medium-request';
import { UpdateContactMediumResponse } from '../models/contact-medium/update-contact-medium-response';
import { GetContactMediumResponse } from '../models/contact-medium/get-contact-medium-response';

@Injectable({
  providedIn: 'root'
})
export class ContactMediumApiService {

  constructor(private http: HttpClient) { }

  getList(): Observable<GetListResponse<ContactMediumListResponse[]>> {
    return this.http.get<GetListResponse<ContactMediumListResponse[]>>(
      'http://localhost:8081/api/v1/contactMediums',
    );
  }

  post(contactMedium: CreateContactMediumRequest): Observable<CreateContactMediumResponse> {
    return this.http.post<CreateContactMediumResponse>(
      'http://localhost:8081/api/v1/contactMediums',
      contactMedium
    );
  }

  delete(id: string) {
    this.http.delete(
      'http://localhost:8081/api/v1/contactMediums' + id
    );
  }

  put(id: string,contactmedium: UpdateContactMediumRequest
  ): Observable<UpdateContactMediumResponse> {
    return this.http.put<UpdateContactMediumResponse>(
      'http://localhost:8081/api/v1/contactMediums' + '/' + id,
      contactmedium
    );
  }

  getById(id: string): Observable<GetContactMediumResponse> {
    return this.http.get<GetContactMediumResponse>(
      'http://localhost:8081/api/v1/contactMediums' + '/' + id
    );
  }
}
