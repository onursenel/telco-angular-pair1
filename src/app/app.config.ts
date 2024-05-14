import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, } from '@angular/common/http';
import { createReducer, provideState, provideStore } from '@ngrx/store';
import { individualCustomerReducer } from './shared/store/customers/individual-customer.reducer';
import { customerAddressReducer } from './shared/store/addresses/customer-address.reducer';
import { contactMediumReducer } from './shared/store/contactMediums/contact-medium.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name:'individualCustomer',reducer:individualCustomerReducer}),
    provideState({name:'customerAddress',reducer:customerAddressReducer}),
    provideState({name:'contactMedium',reducer:contactMediumReducer})
],
};
