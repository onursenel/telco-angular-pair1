import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { SelectOptionComponent } from '../../../../shared/components/select-option/select-option.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerApiService } from '../../services/customerApi.service';
import { CreateCustomerRequest } from '../../models/customer/create-customer-request';
import { Store, select } from '@ngrx/store';
import { setIndividualCustomer } from '../../../../shared/store/customers/individual-customer.action';
import { Router } from '@angular/router';
import { selectIndividualCustomer } from '../../../../shared/store/customers/individual-customer.selector';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';
import { tcValidator } from './tcValidator';
import { NumberInputDirective } from '../../../../core/directives/number-input.directive';
import { CheckNationalityIdentityOnMernis } from '../../models/customer/check-nationality-identity-on-mernis-request';

@Component({
  selector: 'app-create-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    SelectOptionComponent,
    ErrorMessagesPipe,
    ReactiveFormsModule,
    NumberInputDirective,
  ],
  templateUrl: './create-customer-form.component.html',
  styleUrl: './create-customer-form.component.scss',
})
export class CreateCustomerFormComponent implements OnInit {
  form!: FormGroup;
  currentDate = new Date();
  eighteenYearsAgo = new Date(this.currentDate.getFullYear() - 18, this.currentDate.getMonth(), this.currentDate.getDate());
  formattedDate = `${this.eighteenYearsAgo.getFullYear()}-${String(this.eighteenYearsAgo.getMonth() + 1).padStart(2, '0')}-${String(this.eighteenYearsAgo.getDate()).padStart(2, '0')}`;
  
  checkNationalityIdentityOnMernis: CheckNationalityIdentityOnMernis;
  constructor(
    private fb: FormBuilder,
    private store : Store<{individualCustomer:CreateCustomerRequest}>,
    private router : Router,
    private customerApiService : CustomerApiService,
  ){}

  ngOnInit(): void {
    this.createForm();
    this.store
      .pipe(select(selectIndividualCustomer))
      .subscribe((individualCustomer) => {
        this.form.patchValue(individualCustomer);
        console.log('individualCustomerState:', individualCustomer)
      });
  }

  
  createForm(){
      this.form= this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      middleName: ['',[
        Validators.maxLength(10),
      ]],
      lastName: ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      gender: ['',Validators.required],
      motherName: ['',[
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      fatherName: [''],
      birthDate: ['',Validators.required],
      nationalityId: ['',[
        Validators.required,
        Validators.pattern('^[1-9]{1}[0-9]{9}[02468]{1}$'),
        tcValidator()
      ]],
    });
  }
  createCustomer(){
    const individualCustomer: CreateCustomerRequest = {
      firstName: this.form.value.firstName,
      middleName: this.form.value.middleName,
      lastName: this.form.value.lastName,
      gender: this.form.value.gender,
      motherName: this.form.value.motherName,
      fatherName: this.form.value.fatherName,
      birthDate: this.form.value.birthDate,
      nationalityId: this.form.value.nationalityId,
    };
    
    this.store.dispatch(setIndividualCustomer({individualCustomer}));
    this.router.navigate(['address-information']);
    
  }
  checkNationalityIdentityRequest() {
    const birthDateValue = this.form.value.birthDate;
    let birthDate: Date;
  
    if (typeof birthDateValue === 'string') {
      birthDate = new Date(birthDateValue);
    } else {
      birthDate = birthDateValue;
    }
    this.checkNationalityIdentityOnMernis ={
      nationalityId:this.form.value.nationalityId,
      firstName:this.form.value.firstName,
      lastName:this.form.value.lastName,
      birthDate:birthDate.getFullYear()
    }
  }


  onFormSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      console.error(this.form.get('firstName').hasError('required'));
      console.error(this.form.get('firstName').hasError('minlength'));
      console.error(this.form.get('nationalityId').hasError('pattern'));
      return;
    }
    this.createCustomer();
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['/customer-search'])
  }


 }
