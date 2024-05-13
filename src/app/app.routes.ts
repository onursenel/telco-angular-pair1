import { Routes } from '@angular/router';
import { LoginPageComponent } from './routers/auth/login-page/login-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateCustomerPageComponent } from './routers/create-customer-page/create-customer-page.component';
import { AddressInformationPageComponent } from './routers/address-information-page/address-information-page.component';
import { CreateContactMediumPageComponent } from './routers/create-contact-medium-page/create-contact-medium-page.component';
import { CreateAddressFormComponent } from './features/addresses/components/create-address-form/create-address-form.component';
import { CustomerSearchPageComponent } from './routers/customer-search-page/customer-search-page.component';
import { DeletePopupComponent } from './shared/components/delete-popup/delete-popup.component';
import { AdressTabEditDeleteComponent } from './routers/adress-tab-edit-delete/adress-tab-edit-delete.component';
import { MidleNavbarComponent } from './shared/components/midle-navbar/midle-navbar.component';
import { OfferSelectionPageComponent } from './routers/offer-selection-page/offer-selection-page.component';
import { ContacMediumInformationComponent } from './features/customers/components/contac-medium-information/contac-medium-information.component';
import { UpdateContactMediumFormComponent } from './features/customers/components/update-contact-medium-form/update-contact-medium-form.component';
import { UpdateContactMediumPageComponent } from './routers/update-contact-medium-page/update-contact-medium-page.component';
import { InfoContactMediumPageComponent } from './routers/info-contact-medium-page/info-contact-medium-page.component';
import { CustomerAccountsInformationComponent } from './features/customers/components/customer-accounts-information/customer-accounts-information.component';
import { SubmitOrderPageComponent } from './routers/submit-order-page/submit-order-page.component';
import { ConfigurationProductPageComponent } from './routers/configuration-product-page/configuration-product-page.component';
import { CreateBillingAccountPageComponent } from './routers/create-billing-account-page/create-billing-account-page.component';
import { UpdateBillingAccountPageComponent } from './routers/update-billing-account-page/update-billing-account-page.component';
import { CustomerInformationPageComponent } from './routers/customer-information-page/customer-information-page.component';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer/search',
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'create/customer',//children olucak : contact medium  ve address information vs...
    component: CreateCustomerPageComponent,
  },
  {
    path: 'address/information',
    component: AddressInformationPageComponent,
  },
  {
    path: 'address-edit-delete',
    component: AdressTabEditDeleteComponent,
  },
  {
    path: 'customer/search',
    component: CustomerSearchPageComponent,
  },

  {
    path: 'contact-medium',
    component: CreateContactMediumPageComponent,
  },
  {
    path: 'info-contact-medium',
    component: InfoContactMediumPageComponent,
  },
  {
    path: 'update-contact-medium',
    component: UpdateContactMediumPageComponent,
  },
  
  {
    path: 'create/address',
    component: CreateAddressFormComponent,
  },
  {
    path: 'offer-selection',
    component: OfferSelectionPageComponent,
  },
  {
    path: 'submit-order',
    component: SubmitOrderPageComponent,
  },
  {
    path: 'configuration-product',
    component: ConfigurationProductPageComponent,
  },
  {
    path: 'midle-navbar',//test
    component: MidleNavbarComponent,
  },
  {
    path: 'address-tab', //test
    component: AdressTabEditDeleteComponent,
  },
  {
    path: 'delete-popup',//test
    component: DeletePopupComponent,
  },
  {
    path: 'create-billing-account',
    component: CreateBillingAccountPageComponent,
  },
  {
    path: 'update-billing-account',
    component: UpdateBillingAccountPageComponent,
  },
  {
    path: 'customer-information',
    component: CustomerInformationPageComponent,
  },
  {
    path: 'test',//test
    component: CustomerAccountsInformationComponent,
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  }

  //Adres rootuna city eklenecek
];
