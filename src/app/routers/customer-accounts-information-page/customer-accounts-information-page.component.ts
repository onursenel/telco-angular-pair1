import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DeletePopupComponent } from '../../shared/components/delete-popup/delete-popup.component';
import { MidleNavbarComponent } from '../../shared/components/midle-navbar/midle-navbar.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CustomerAccountsInformationComponent } from '../../features/customers/components/customer-accounts-information/customer-accounts-information.component';

@Component({
  selector: 'app-customer-accounts-information-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    DeletePopupComponent,
    MidleNavbarComponent,
    InputComponent,
    ButtonComponent,
    CustomerAccountsInformationComponent
  ],
  templateUrl: './customer-accounts-information-page.component.html',
  styleUrl:'./customer-accounts-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerAccountsInformationPageComponent { }
