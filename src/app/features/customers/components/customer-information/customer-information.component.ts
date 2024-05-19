import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCustomerResponse } from '../../models/customer/get-customer-response';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CustomerApiService } from '../../services/customerApi.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateCustomerRequest } from '../../models/customer/update-customer-request';

@Component({
  selector: 'app-customer-information',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './customer-information.component.html',
  styleUrl: './customer-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerInformationComponent implements OnInit{ 

  @Input()
  customerInfos: GetCustomerResponse;

  @Input()
  activateEditMode: boolean;
  
  @Input()
  customerId: string;
  
  @Input()
  form: FormGroup;

  @Output() cancelEditMode = new EventEmitter<boolean>(); 


  constructor(private customerApiService: CustomerApiService) {}

  ngOnInit(): void {
  }


  saveCustomerInfo(): void {
    if (this.form.valid) {

      const request = {
        id: this.customerId,
        firstName:this.form.get("firstName").value,
        middleName:this.form.get("middleName").value,
        lastName:this.form.get("lastName").value,
        gender:this.form.get("gender").value,
        motherName:this.form.get("motherName").value,
        fatherName:this.form.get("fatherName").value,
        nationalityId:this.form.get("nationalityId").value,
        birthDate:this.form.get("birthDate").value
      } as UpdateCustomerRequest;
      
      this.customerApiService.put( request).subscribe((data) => {
        this.customerInfos = data;
        this.cancelEditMode.emit(false)
      });
    }
  }
}
