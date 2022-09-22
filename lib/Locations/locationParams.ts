import { BasicResponseParams } from "../utills/apiResponseParams";

interface LocationBasicParams extends BasicResponseParams {
  address?: string;
  name?: string;
  distance?: number;
  location_types?: string[];
  location?: [number, number];
  location_ids?: string[];
  insurance_ids?: string[];
  insurance_carrier_name?: string;
  min_confidence?: number;

  // Based on Organization Affiliation
  organization_ids?: string[];

  // based on focus areas
  clinical_area?: string;
  clinical_area_ids?: string[];
  treatment?: string;
  treatment_ids?: string[];
}

export interface LocationParams extends LocationBasicParams {
  exclude?: LocationBasicParams;
}
