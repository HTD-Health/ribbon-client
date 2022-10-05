import { ClinicalAreasParams, ClinicalAreasResponse } from "../ClinicalAreas";
import {
  ConditionCostEstimateParams,
  ConditionCostEstimateResponse,
} from "../ConditionCostEstimate";
import { ConditionsParams, ConditionsResponse } from "../Conditions";
import { InsurancesParams, InsurancesResponse } from "../Insurances";
import { LanguageParams, LanguageResponse } from "../Languages";
import { LocationsParams, LocationsResponse } from "../Locations";
import { OrganizationsParams, OrganizationsResponse } from "../Organizations";
import { ProvidersParams, ProvidersResponse } from "../Providers";
import { SpecialtiesParams, SpecialtiesResponse } from "../Specialties";
import { TreatmentParams, TreatmentResponse } from "../Treatments";

export type Options = {
  endpoint: string;
  query?: string;
};

export interface UuidDisplay {
  uuid: string;
  display: string;
}

export interface AddressDetails {
  zip: string;
  city: string;
  state: string;
  street: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
}

export type Gender = "m" | "f";

export type PropType =
  | undefined
  | string
  | string[]
  | number
  | number[]
  | boolean;

export type SearchParameters =
  | ClinicalAreasParams
  | ConditionCostEstimateParams
  | ConditionsParams
  | InsurancesParams
  | LanguageParams
  | LocationsParams
  | OrganizationsParams
  | ProvidersParams
  | SpecialtiesParams
  | TreatmentParams;

export type RibbonResponse =
  | Promise<ClinicalAreasResponse>
  | Promise<ConditionCostEstimateResponse>
  | Promise<ConditionsResponse>
  | Promise<InsurancesResponse>
  | Promise<LanguageResponse>
  | Promise<LocationsResponse>
  | Promise<OrganizationsResponse>
  | Promise<ProvidersResponse>
  | Promise<SpecialtiesResponse>
  | Promise<TreatmentResponse>;
