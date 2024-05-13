import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CreateBillingAccountFormComponent } from '../../features/create-billing-account-form/create-billing-account-form.component';
import { AdressTabEditDeleteFormComponent } from '../../features/addresses/components/adress-tab-edit-delete-form/adress-tab-edit-delete-form.component';
import { CreateAddressFormComponent } from '../../features/addresses/components/create-address-form/create-address-form.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-create-billing-account-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CreateBillingAccountFormComponent,
    AdressTabEditDeleteFormComponent,
    CreateAddressFormComponent,
    ButtonComponent
  ],
  templateUrl: './create-billing-account-page.component.html',
  styleUrl: './create-billing-account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBillingAccountPageComponent { }
