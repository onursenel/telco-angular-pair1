import { Routes } from '@angular/router';
import { LoginPageComponent } from './routers/auth/login-page/login-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateCustomerPageComponent } from './routers/create-customer-page/create-customer-page.component';
import { AddressInformationPageComponent } from './routers/address-information-page/address-information-page.component';
import { CreateContactMediumPageComponent } from './routers/create-contact-medium-page/create-contact-medium-page.component';
import { CustomerSearchPageComponent } from './routers/customer-search-page/customer-search-page.component';
import { DeletePopupComponent } from './shared/components/delete-popup/delete-popup.component';
import { AddressTabEditDeleteComponent } from './routers/address-tab-edit-delete/address-tab-edit-delete.component';
import { MiddleNavbarComponent } from './shared/components/middle-navbar/middle-navbar.component';
import { OfferSelectionPageComponent } from './routers/offer-selection-page/offer-selection-page.component';
import { UpdateContactMediumPageComponent } from './routers/update-contact-medium-page/update-contact-medium-page.component';
import { InfoContactMediumPageComponent } from './routers/info-contact-medium-page/info-contact-medium-page.component';
import { CustomerAccountsInformationComponent } from './features/customers/components/customer-accounts-information/customer-accounts-information.component';
import { SubmitOrderPageComponent } from './routers/submit-order-page/submit-order-page.component';
import { ConfigurationProductPageComponent } from './routers/configuration-product-page/configuration-product-page.component';
import { CustomerAccountsInformationPageComponent } from './routers/customer-accounts-information-page/customer-accounts-information-page.component';
import { CreateBillingAccountPageComponent } from './routers/create-billing-account-page/create-billing-account-page.component';
import { UpdateBillingAccountPageComponent } from './routers/update-billing-account-page/update-billing-account-page.component';
import { CustomerInformationPageComponent } from './routers/customer-information-page/customer-information-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { securedRouteGuard } from './shared/guards/SecuredRoute.guard';
export const routes: Routes = [




  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer-search',
  },
  {
    path: 'home',
    pathMatch:'prefix',
    canActivate: [securedRouteGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: 'customer-information/:id', 
        component: CustomerInformationPageComponent,
      },
      {
        path: 'address', 
        component: AddressTabEditDeleteComponent,
      },
      
      {
        path: 'account', 
        component: CustomerAccountsInformationPageComponent,
      },
      {
        path: 'contact-medium', 
        component: InfoContactMediumPageComponent,
      },
      {
        path: 'contact-medium/update', 
        component: UpdateContactMediumPageComponent,
      },

    ],
  },

  


  {
    path: 'auth-login',
    component: LoginPageComponent
  },
  {
    path: 'create-customer',//children olucak : contact medium  ve address information vs...
    component: CreateCustomerPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'address-information',
    component: AddressInformationPageComponent,
    canActivate: [securedRouteGuard]
  },
 
  {
    path: 'customer-search',
    component: CustomerSearchPageComponent,
    canActivate: [securedRouteGuard]
  }, 
  {
    path: 'contact-medium',
    component: CreateContactMediumPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'offer-selection',
    component: OfferSelectionPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'submit-order',
    component: SubmitOrderPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'configuration-product',
    component: ConfigurationProductPageComponent,
    canActivate: [securedRouteGuard]
  },
 
  {
    path: 'create-billing-account',
    component: CreateBillingAccountPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'update-billing-account',
    component: UpdateBillingAccountPageComponent,
    canActivate: [securedRouteGuard]
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  }


  // {
  //   path: 'customer-information',
  //   component: CustomerInformationPageComponent,
  // },
   // {
  //   path: 'address-tab', //test
  //   component: AddressTabEditDeleteComponent,
  // },
    // {
  //   path: 'info-contact-medium',
  //   component: InfoContactMediumPageComponent,
  // },

    // {
  //   path: 'customer/account/information',
  //   component: CustomerAccountsInformationPageComponent,
  // },

  //Adres rootuna city eklenecek
];
