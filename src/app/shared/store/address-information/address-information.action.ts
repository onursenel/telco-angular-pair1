// address-information.actions.ts
import { createAction, props } from '@ngrx/store';
import { CreateAddressRequest } from '../../../features/customers/models/address/create-address-request';

export const setCustomerAddressInformation = createAction(
  '[Customer Address] Set Customer Address',
  props<{ customerAddress: CreateAddressRequest }>()
);
