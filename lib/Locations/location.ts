import { Insurance } from "../Insurances";
import { AddressDetails } from "../utills/types";

export interface Location {
  name: string | null;
  uuid: string;
  address: string;
  latitude: number;
  longitude: number;
  confidence: number;
  insurances: Insurance[];
  phone_numbers: {
    phone: string;
    detail?: string;
    details?: string;
  }[];
  cms_data?: {
    cms_certification_number?: string;
    cms_hospital_overall_rating?: number | null;
    cms_hcahps_overall_hospital_star_rating?: number | null;
  }[];
  npis?: string[];
  distance?: number;
  location_types: string[];
  address_details: AddressDetails;
  google_maps_link: string | null;
  aha_id?: string;
  version_id?: string;
  parent_aha_id?: string;
}
