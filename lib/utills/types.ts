import { ClinicalAreasParams, ClinicalAreasResponse } from "../ClinicalAreas";
import {
  ConditionCostEstimateParams,
  ConditionCostEstimateResponse,
} from "../ConditionCostEstimate";
import { ConditionsParams, ConditionsResponse } from "../Conditions";
import { InsurancesParams, InsurancesResponse } from "../Insurances";
import { LocationsParams, LocationsResponse } from "../Locations";
import { OrganizationsParams, OrganizationsResponse } from "../Organizations";
import { ProvidersParams, ProvidersResponse } from "../Providers";
import { SpecialtiesParams, SpecialtiesResponse } from "../Specialties";

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
  street: string;
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
  | LocationsParams
  | OrganizationsParams
  | ProvidersParams
  | SpecialtiesParams;

export type RibbonResponse =
  | Promise<ClinicalAreasResponse>
  | Promise<ConditionCostEstimateResponse>
  | Promise<ConditionsResponse>
  | Promise<InsurancesResponse>
  | Promise<LocationsResponse>
  | Promise<OrganizationsResponse>
  | Promise<ProvidersResponse>
  | Promise<SpecialtiesResponse>;
