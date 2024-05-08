import { CreateAddressRequest } from "../../../features/addresses/models/create-address-request";


export interface CustomerAddressState {
  customerAddress: CreateAddressRequest;
}

export const initialCustomerAddressState: CustomerAddressState = {
  customerAddress: {
    houseNumber: '',
    street: '',
    description: '',
    cityId: 0
  },
};
