import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleMenuComponent } from '../../shared/components/toggle-menu/toggle-menu.component';
import { CreateAddressFormComponent } from '../addresses/components/create-address-form/create-address-form.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { AdressTabEditDeleteFormComponent } from '../addresses/components/adress-tab-edit-delete-form/adress-tab-edit-delete-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-update-billing-account-form',
  standalone: true,
  imports: [
    CommonModule,
    ToggleMenuComponent,
    CreateAddressFormComponent,
    InputComponent,
    AdressTabEditDeleteFormComponent,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './update-billing-account-form.component.html',
  styleUrl: './update-billing-account-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBillingAccountFormComponent { }
