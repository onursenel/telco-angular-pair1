import { createAction, props } from '@ngrx/store';
import { CreateCustomerRequest } from '../../../features/customers/models/customer/create-customer-request';

export const setIndividualCustomer = createAction(
  '[Individual Customer] set Individual Customer',
  props<{ individualCustomer: CreateCustomerRequest }>()
);
