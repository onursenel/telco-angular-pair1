// address-information.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialCustomerAddressState } from './address-information.state';
import { setCustomerAddressInformation } from './address-information.action';

export const customerAddressInformationReducer = createReducer(
  initialCustomerAddressState,
  on(setCustomerAddressInformation, (state, { customerAddress }) => ({
    ...state,
    customerAddress: [...state.customerAddress, customerAddress],
  }))
);
