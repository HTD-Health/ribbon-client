import { ClinicalAreaParams, ClinicalAreaResponse } from "../ClinicalAreas";
import { InsuranceParams, InsuranceResponse } from "../Insurances";
import { LocationParams, LocationResponse } from "../Locations";
import { ProviderParams, ProviderResponse } from "../Providers";
import { SpecialtyParams, SpecialtyResponse } from "../Specialties";

export type Options = {
  endpoint: string;
  query?: string;
};

export type PropType =
  | undefined
  | string
  | string[]
  | number
  | number[]
  | boolean;

export type SearchParameters =
  | ProviderParams
  | ClinicalAreaParams
  | InsuranceParams
  | LocationParams
  | SpecialtyParams;

export type RibbonResponse =
  | Promise<ClinicalAreaResponse>
  | Promise<ProviderResponse>
  | Promise<InsuranceResponse>
  | Promise<LocationResponse>
  | Promise<SpecialtyResponse>;
