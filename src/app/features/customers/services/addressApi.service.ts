import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListResponse } from '../../../shared/models/get-list-response';
import { AddressListResponse } from '../models/address/address-list-response';
import { CreateAddressRequest } from '../models/address/create-address-request';
import { CreateAddressResponse } from '../models/address/create-address-response';
import { UpdateAddressRequest } from '../models/address/update-address-request';
import { UpdateAddressResponse } from '../models/address/update-address-response';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {

  constructor(private http: HttpClient) { }

  get(page: number,size: number,customerId: string | null): Observable<GetListResponse<AddressListResponse>> {
    if(customerId == null){
      return this.http.get<GetListResponse<AddressListResponse>>(
        'http://localhost:8081/api/v1/addresses?page=' + page + '&size=' + size);
    }
    else{
      return this.http.get<GetListResponse<AddressListResponse>>(
        'http://localhost:8081/api/v1/addresses?page=' + page + '&size=' + size + '&customerId=' + customerId);
    }
  }

  post(address: CreateAddressRequest): Observable<CreateAddressResponse> {
    return this.http.post<CreateAddressResponse>(
      'http://localhost:8081/api/v1/addresses',
    address);
  }

  delete(id: string) {
    this.http.delete('api-url' + id);
  }

  put(id: string, address: UpdateAddressRequest): Observable<UpdateAddressResponse> {
    return this.http.put<UpdateAddressResponse>(
      'http://localhost:8081/api/v1/addresses' + id,
    address);
  }

}
