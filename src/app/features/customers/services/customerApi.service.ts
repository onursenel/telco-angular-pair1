import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCustomerRequest } from '../models/customer/create-customer-request';
import { CreateCustomerResponse } from '../models/customer/create-customer-response';
import { UpdateCustomerRequest } from '../models/customer/update-customer-request';
import { UpdateCustomerResponse } from '../models/customer/update-customer-response';
import { CustomerListResponse } from '../models/customer/customer-list-response';
import { GetListResponse } from '../../../shared/models/get-list-response';
import { GetCustomerResponse } from '../models/customer/get-customer-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

 
  constructor(private http: HttpClient) { }

  getList(): Observable<GetListResponse<CustomerListResponse[]>> {
    return this.http.get<GetListResponse<CustomerListResponse[]>>(
      'http://localhost:8081/api/v1/individualCustomers'
    );
  }

  post(customer: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    return this.http.post<CreateCustomerResponse>(
      'http://localhost:8081/api/v1/individualCustomers',
      customer
    );
  }

  put(customer: UpdateCustomerRequest): Observable<GetCustomerResponse> {
    return this.http.put<GetCustomerResponse>(
      'http://localhost:8081/api/v1/individualCustomers',
      customer
    );
  }


  getById(customerId: string): Observable<GetCustomerResponse> {
    return this.http.get<GetCustomerResponse>(
      'http://localhost:8081/api/v1/individualCustomers/' + customerId,
    );
  }

  
  delete(customerId: string): Observable<any> {
    return this.http.delete<any>(
      'http://localhost:8081/api/v1/individualCustomers/' + customerId,
    );
  }



}
