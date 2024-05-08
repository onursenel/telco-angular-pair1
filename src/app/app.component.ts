import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateCustomerPageComponent } from './routers/create-customer-page/create-customer-page.component';
import { AddressInformationPageComponent } from './routers/address-information-page/address-information-page.component';
import { CreateContactMediumPageComponent } from './routers/create-contact-medium-page/create-contact-medium-page.component';
import { CreateAddressFormComponent } from './features/addresses/components/create-address-form/create-address-form.component';
import { CustomerSearchPageComponent } from './routers/customer-search-page/customer-search-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginFormComponent, 
    NotFoundPageComponent,
    CreateCustomerPageComponent,
    AddressInformationPageComponent,
    CreateContactMediumPageComponent,
    CreateAddressFormComponent,
    CustomerSearchPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'telco-crm-angular-pair1';
}
