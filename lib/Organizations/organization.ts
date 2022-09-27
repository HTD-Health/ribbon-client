import { AddressDetails } from "../utills/types";

export interface Organization {
  uuid: string;
  name: string;
  organization_types: string[];
  websites: {
    url: string;
  }[];
  ids: {
    id: string;
    id_type: string;
  }[];
  address: string;
  address_details: AddressDetails;
  latitude: number;
  longitude: number;
  phone_numbers: {
    phone: string;
    details: string;
  }[];
}
