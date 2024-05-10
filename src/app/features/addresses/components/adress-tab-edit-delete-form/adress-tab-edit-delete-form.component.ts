import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { setCustomerAddress } from '../../../../shared/store/addresses/customer-address.action';
import { CreateAddressRequest } from '../../models/create-address-request';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCustomerAddress } from '../../../../shared/store/addresses/customer-address.selector';

@Component({
  selector: 'app-adress-tab-edit-delete-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './adress-tab-edit-delete-form.component.html',
  styleUrl: './adress-tab-edit-delete-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdressTabEditDeleteFormComponent { 
  
  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private store: Store<{ customerAddress: CreateAddressRequest }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.store
      .pipe(select(selectCustomerAddress))
      .subscribe((customerAddress) => {
        this.form.patchValue(customerAddress);
        console.log('customerAddressState:', customerAddress);
      });
  }

  createForm() {
    this.form = this.fb.group({
      cityId: ['', Validators.required],
      street: [''],
      houseNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  createCustomerAddress() {

    
    const customerAddress: CreateAddressRequest = {
      cityId: this.form.value.cityId,
      street: this.form.value.street,
      houseNumber: this.form.value.houseNumber,
      description: this.form.value.description,
    };
    this.store.dispatch(setCustomerAddress({ customerAddress }));
    
  }
  onFormSubmit() {
    const myModal = document.getElementById('myModal');
    const backdrop = document.querySelector('.modal-backdrop');
    if (myModal) {
      myModal.classList.remove('show');
      myModal.style.display = 'none';
    }
    if (backdrop) {
      document.body.removeChild(backdrop);
    }


    console.log(this.form);

    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.createCustomerAddress();
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

  closePopup() {
    const myModal = document.getElementById('myModal');
    const backdrop = document.querySelector('.modal-backdrop');
    if (myModal) {
      myModal.classList.remove('show');
      myModal.style.display = 'none';
    }
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  }
}

