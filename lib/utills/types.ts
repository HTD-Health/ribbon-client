import { ClinicalAreaParams, ClinicalAreaResponse } from "../ClinicalAreas";
import { InsuranceParams, InsuranceResponse } from "../Insurances";
import { LocationParams, LocationResponse } from "../Locations";
import { OrganizationParams, OrganizationResponse } from "../Organizations";
import { ProviderParams, ProviderResponse } from "../Providers";
import { SpecialtyParams, SpecialtyResponse } from "../Specialties";

export type Options = {
  endpoint: string;
  query?: string;
};

export interface UuidDisplay {
  uuid: string;
  display: string;
}

export type PropType =
  | undefined
  | string
  | string[]
  | number
  | number[]
  | boolean;

export type SearchParameters =
  | ClinicalAreaParams
  | InsuranceParams
  | LocationParams
  | OrganizationParams
  | ProviderParams
  | SpecialtyParams;

export type RibbonResponse =
  | Promise<ClinicalAreaResponse>
  | Promise<InsuranceResponse>
  | Promise<LocationResponse>
  | Promise<OrganizationResponse>
  | Promise<ProviderResponse>
  | Promise<SpecialtyResponse>;
