import { CreateContactMediumRequest } from "../../../features/customers/models/contact-medium/create-contact-medium-request";


export interface ContactMediumState {
  contactMedium: CreateContactMediumRequest;
}

export const initialContactMediumState: ContactMediumState = {
  contactMedium: {
    customerId : '',
    email: '',
    homePhone: '',
    mobilePhone: '',
    fax: '',
  },
};
