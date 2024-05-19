import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerInformationComponent } from '../../features/customers/components/customer-information/customer-information.component';
import { CustomerApiService } from '../../features/customers/services/customerApi.service';
import { GetCustomerResponse } from '../../features/customers/models/customer/get-customer-response';
import { UpdateContactMediumPageComponent } from "../update-contact-medium-page/update-contact-medium-page.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeletePopupComponent } from '../../shared/components/delete-popup/delete-popup.component';

@Component({
  selector: 'app-customer-information-page',
  standalone: true,
  templateUrl: './customer-information-page.component.html',
  styleUrl: './customer-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    MiddleNavbarComponent,
    RouterModule,
    CustomerInformationComponent,
    RouterModule,
    CustomerInformationComponent,
    UpdateContactMediumPageComponent,
    DeletePopupComponent
  ]
})
export class CustomerInformationPageComponent implements OnInit {
  customerId: string;
  customerInfos: GetCustomerResponse;
  activateEditMode: boolean = false;
  form!: FormGroup;
  showDeletePopup: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private customerApiService: CustomerApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
      this.getCustomerInfo();
    });
  }

  private getCustomerInfo() {
    this.customerApiService.getById(this.customerId).subscribe((data) => {
      this.customerInfos = {
        customerId: data.customerId,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        gender: data.gender,
        motherName: data.motherName,
        fatherName: data.fatherName,
        birthDate: data.birthDate,
        nationalityId: data.nationalityId
      }

      this.updateForm();
    })
  }

  updateForm() {
    this.form = this.fb.group({
      firstName: [this.customerInfos.firstName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      middleName: [this.customerInfos.middleName, [
        Validators.minLength(2),
        Validators.maxLength(10),
      ]],
      lastName: [this.customerInfos.lastName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      gender: [this.customerInfos.gender, Validators.required],
      motherName: [this.customerInfos.motherName, [
        Validators.minLength(2),
        Validators.maxLength(30),
      ]],
      fatherName: [this.customerInfos.fatherName],
      birthDate: [this.customerInfos.birthDate, Validators.required],
      nationalityId: [this.customerInfos.nationalityId, [
        Validators.required,
        Validators.pattern('^[1-9]{1}[0-9]{9}[02468]{1}$'),
      ]],
    });
  }


  navigateToUpdatePage() {
    this.activateEditMode = !this.activateEditMode;
  }
  deleteCustomer() {
    this.showDeletePopup = true;
  }

  clickYes() {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
      this.customerApiService.delete(this.customerId).subscribe(() => {
        this.router.navigate(['customer-search'])
      })
    });
  }
}
