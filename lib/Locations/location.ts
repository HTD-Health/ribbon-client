import { AddressDetails } from "../utills/types";

export interface Location {
  name: string;
  uuid: string;
  faxes: [];
  address: string;
  latitude: number;
  longitude: number;
  confidence: 2;
  insurances: [];
  phone_numbers: {
    phone: string;
    details: string;
  }[];
  location_types: string[];
  address_details: AddressDetails;
  google_maps_link: string | null;
  aha_id?: string;
  version_id?: string;
  parent_aha_id?: string;
}
