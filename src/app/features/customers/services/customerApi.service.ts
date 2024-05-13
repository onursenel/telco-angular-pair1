import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCustomerRequest } from '../models/create-customer-request';
import { CreateCustomerResponse } from '../models/create-customer-response';
import { UpdateCustomerRequest } from '../models/update-customer-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    return this.http.post<CreateCustomerResponse>(
      'http://localhost:8081/api/v1/individualCustomers',
      customer
    );
  }

  putCustomer(customer: UpdateCustomerRequest): Observable<CreateCustomerResponse> {
    return this.http.post<CreateCustomerResponse>(
      'http://localhost:8081/api/v1/individualCustomers',
      customer
    );
  }




}
