import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CreateAddressFormComponent } from '../create-address-form/create-address-form.component';
import { Store } from '@ngrx/store';
import { CustomerAddressState } from '../../../../shared/store/addresses/customer-address.state';
import { CreateAddressRequest } from '../../models/address/create-address-request';
import { setCustomerAddress } from '../../../../shared/store/addresses/customer-address.action';
import { setCustomerAddressInformation } from '../../../../shared/store/address-information/address-information.action';
import { selectCustomerAddressInformation } from '../../../../shared/store/address-information/address-information.selector';
import { Observable } from 'rxjs';
import { CityApiService } from '../../../cities/services/city-api.service';
import { CityListResponse } from '../../models/city/city-liste-response';

@Component({
  selector: 'etiya-address-information',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
    CreateAddressFormComponent
  ],
  templateUrl: './address-information.component.html',
  styleUrl: './address-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInformationComponent implements OnInit{

  addresses$: Observable<CreateAddressRequest[]> = this.store.select(selectCustomerAddressInformation);
  selectedAddressId: number = 0;
  cityList: CityListResponse[];
  isMenu1Open = false;
  isMenu2Open = false;

  constructor(private store: Store, private cdr: ChangeDetectorRef, private cityApiService: CityApiService) { }

  ngOnInit(): void {
    this.cityApiService.getList().subscribe((data)=>{
      this.cityList = data.items;
    })
  }

  getCityName(cityId: string): string{
    return this.cityList.find(data=>data.id ===cityId).name;
  }

  openPopup() {
    const myModal = document.getElementById('myModal');
    if (myModal) {
      myModal.classList.add('show');
      myModal.style.display = 'block';
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop', 'fade', 'show');
      document.body.appendChild(backdrop);
    }
  }

  toggleMenu(menuNumber: number) {
    if (this.selectedAddressId === menuNumber) { this.selectedAddressId = 0 } else {

      this.selectedAddressId = menuNumber;
      this.cdr.detectChanges();
    }

  }

  closeMenu() {
    this.isMenu1Open = false;
    this.isMenu2Open = false;
  }


  handleCustomerAddress(address: CreateAddressRequest) {
    this.store.dispatch(setCustomerAddressInformation({ customerAddress: { ...address, addressId: Math.floor(Math.random() * (100000 - 0 + 1) + 0) } }));
  }

  deleteAddress(){
    //to do: delete address from state
  }
}
