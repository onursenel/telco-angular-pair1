import { createAction, props } from '@ngrx/store';
import { CreateAddressRequest } from '../../../features/customers/models/address/create-address-request';


export const setCustomerAddress = createAction(
  '[Customer Address] set Customer Address',
  props<{ customerAddress: CreateAddressRequest }>()
);
