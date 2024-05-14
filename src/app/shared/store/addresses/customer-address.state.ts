import { CreateAddressRequest } from "../../../features/customers/models/address/create-address-request";


export interface CustomerAddressState {
  customerAddress: CreateAddressRequest;
}

export const initialCustomerAddressState: CustomerAddressState = {
  customerAddress: {
    houseNumber: '',
    street: '',
    description: '',
    cityId: '',
    customerId: ''
  },
};
