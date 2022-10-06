import { ClinicalAreasParams, ClinicalAreasResponse } from "../ClinicalAreas";
import {
  ConditionCostEstimateParams,
  ConditionCostEstimateResponse,
} from "../ConditionCostEstimate";
import { ConditionsParams, ConditionsResponse } from "../Conditions";
import { InsurancesParams, InsurancesResponse } from "../Insurances";
import { LanguagesParams, LanguagesResponse } from "../Languages";
import { LocationsParams, LocationsResponse } from "../Locations";
import { OrganizationsParams, OrganizationsResponse } from "../Organizations";
import {
  ProcedureCostEstimateParams,
  ProcedureCostEstimateResponse,
} from "../ProcedureCostEstimate";
import { ProceduresParams, ProceduresResponse } from "../Procedures";
import { ProvidersParams, ProvidersResponse } from "../Providers";
import { SpecialtiesParams, SpecialtiesResponse } from "../Specialties";
import { TreatmentsParams, TreatmentsResponse } from "../Treatments";

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
  | LanguagesParams
  | LocationsParams
  | OrganizationsParams
  | ProcedureCostEstimateParams
  | ProceduresParams
  | ProvidersParams
  | SpecialtiesParams
  | TreatmentsParams;

export type RibbonResponse =
  | Promise<ClinicalAreasResponse>
  | Promise<ConditionCostEstimateResponse>
  | Promise<ConditionsResponse>
  | Promise<InsurancesResponse>
  | Promise<LanguagesResponse>
  | Promise<LocationsResponse>
  | Promise<OrganizationsResponse>
  | Promise<ProcedureCostEstimateResponse>
  | Promise<ProceduresResponse>
  | Promise<ProvidersResponse>
  | Promise<SpecialtiesResponse>
  | Promise<TreatmentsResponse>;
