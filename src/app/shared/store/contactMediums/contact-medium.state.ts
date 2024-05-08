import { CreateContactMediumRequest } from "../../../features/customers/models/create-contact-medium-request";


export interface ContactMediumState {
  contactMedium: CreateContactMediumRequest;
}

export const initialContactMediumState: ContactMediumState = {
  contactMedium: {
    email: '',
    homePhone: '',
    mobilePhone: '',
    fax: '',
  },
};
