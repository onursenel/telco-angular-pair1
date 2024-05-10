import { Routes } from '@angular/router';
import { LoginPageComponent } from './routers/auth/login-page/login-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateCustomerPageComponent } from './routers/create-customer-page/create-customer-page.component';
import { AddressInformationPageComponent } from './routers/address-information-page/address-information-page.component';
import { CreateContactMediumPageComponent } from './routers/create-contact-medium-page/create-contact-medium-page.component';
import { CreateAddressFormComponent } from './features/addresses/components/create-address-form/create-address-form.component';
import { CustomerSearchPageComponent } from './routers/customer-search-page/customer-search-page.component';
import { MidleNavbarComponent } from './shared/components/midle-navbar/midle-navbar.component';
import { DeletePopupComponent } from './shared/components/delete-popup/delete-popup.component';
import { AdressTabEditDeleteComponent } from './routers/adress-tab-edit-delete/adress-tab-edit-delete.component';

export const routes: Routes = [

  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'create/customer',
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
    path: 'customer/search',
    component: CustomerSearchPageComponent,
  },

  {
    path: 'contact-medium',
    component: CreateContactMediumPageComponent,
  },
  {
    path: 'create/address',
    component: CreateAddressFormComponent,
  },

  {
    path: 'midle-navbar',//test
    component: MidleNavbarComponent,
  },
  {
    path: 'adrestab', //test
    component: AdressTabEditDeleteComponent,
  },
  {
    path: 'delete-popup',//test
    component: DeletePopupComponent,
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
