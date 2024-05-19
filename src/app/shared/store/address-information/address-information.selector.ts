// address-information.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerAddressState } from './address-information.state';

const selectCustomerAddressInformationState = createFeatureSelector<CustomerAddressState>('customerAddressInformation');

export const selectCustomerAddressInformation = createSelector(
  selectCustomerAddressInformationState,
  (state: CustomerAddressState) => state.customerAddress
);
