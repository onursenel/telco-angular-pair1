import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CreateBillingAccountFormComponent } from '../../features/create-billing-account-form/create-billing-account-form.component';
import { AdressTabEditDeleteFormComponent } from '../../features/addresses/components/adress-tab-edit-delete-form/adress-tab-edit-delete-form.component';
import { CreateAddressFormComponent } from '../../features/addresses/components/create-address-form/create-address-form.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { UpdateBillingAccountFormComponent } from '../../features/update-billing-account-form/update-billing-account-form.component';

@Component({
  selector: 'app-update-billing-account-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    UpdateBillingAccountFormComponent,
    AdressTabEditDeleteFormComponent,
    CreateAddressFormComponent,
    ButtonComponent
  ],
  templateUrl: './update-billing-account-page.component.html',
  styleUrl: './update-billing-account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBillingAccountPageComponent { }
