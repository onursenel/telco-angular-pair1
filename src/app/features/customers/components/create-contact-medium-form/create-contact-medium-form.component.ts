import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CreateContactMediumRequest } from '../../models/contact-medium/create-contact-medium-request';
import { Router, RouterModule } from '@angular/router';
import { selectContactMedium } from '../../../../shared/store/contactMediums/contact-medium.selector';
import { setContactMedium } from '../../../../shared/store/contactMediums/contact-medium.action';
import { CustomerApiService } from '../../services/customerApi.service';
import { ContactMediumApiService } from '../../services/contact-mediumApi.service';
import { CreateAddressRequest } from '../../models/address/create-address-request';
import { AddressApiService } from '../../services/addressApi.service';
import { CreateCustomerRequest } from '../../models/customer/create-customer-request';
import { selectIndividualCustomer } from '../../../../shared/store/customers/individual-customer.selector';
import { selectCustomerAddress } from '../../../../shared/store/addresses/customer-address.selector';
import { switchMap } from 'rxjs';

@Component({
  selector:'app-create-contact-medium-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './create-contact-medium-form.component.html',
  styleUrl: './create-contact-medium-form.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateContactMediumFormComponent implements OnInit{
  form: FormGroup;
  address: CreateAddressRequest;
  isformValid : boolean=false;
  

  constructor(
    private fb: FormBuilder,
    private customerApiService: CustomerApiService,
    private contactMediumApiService: ContactMediumApiService,
    private addressApiService: AddressApiService,
    private router: Router,
    private store: Store<{ individualCustomer: CreateCustomerRequest }>
  ) {}


  ngOnInit(): void {
    this.createForm();
    this.form.statusChanges.subscribe((status)=>{
      this.isformValid = status ==='VALID';
    })
    this.store.pipe(select(selectContactMedium)).subscribe((contactMedium) => {
      this.form.patchValue(contactMedium);
    });
  }

  makeRequests(){
    let customerFromState: CreateCustomerRequest;
    let addressFromState: CreateAddressRequest;
    let customerIdFromFirstReq: string;
    this.store
      .pipe(select(selectIndividualCustomer))
      .subscribe((individualCustomer) => {
        customerFromState = individualCustomer;
      });
      this.store
      .pipe(select(selectCustomerAddress))
      .subscribe((customerAddress) => {
        addressFromState = customerAddress;
      });
    this.customerApiService.post(customerFromState).pipe(
      switchMap( responseCustomer => {
          customerIdFromFirstReq = responseCustomer.id;
          let newAddress: CreateAddressRequest = {
            customerId: responseCustomer.id,
            cityId: addressFromState.cityId,
            houseNumber: addressFromState.houseNumber,
            street: addressFromState.street,
            description: addressFromState.description,
          }
          return this.addressApiService.post(newAddress).pipe(
            switchMap(response2 => {
              let contactMedium: CreateContactMediumRequest = {
                email: this.form.value.email,
                homePhone: this.form.value.homePhone,
                mobilePhone: this.form.value.mobilePhone,
                fax: this.form.value.fax,
                customerId: customerIdFromFirstReq,
              }
              return this.contactMediumApiService.post(contactMedium);
            })
          );
      })).subscribe();
  }

  
  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      homePhone: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      fax: ['', Validators.required],
    });
    
  }

  goPrevious() {
    const contactMedium : CreateContactMediumRequest = {
      email: this.form.value.email,
      homePhone: this.form.value.homePhone,
      mobilePhone: this.form.value.mobilePhone,
      fax: this.form.value.fax,
      customerId: null,
    };
    this.store.dispatch(setContactMedium({ contactMedium }));
    this.router.navigate(['/home/create-address']);
  }

  onFormSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.makeRequests();
    this.router.navigate(["/customer-search"])
  }

 }
