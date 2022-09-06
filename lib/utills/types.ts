import { ProviderParameters } from "../Providers/providerParameters";
import { SpecialtiesParameters } from "../Specialties/specialtiesParameters";
import { ProviderApiResponse } from "../Providers/types";
import { SpecialtiesApiResponse } from "../Specialties/specialtiesApiResponse";

export type Options = {
  endpoint: string;
  query?: string;
};

export type PropType = undefined | string | string[] | number | boolean;

export type SearchParameters = ProviderParameters | SpecialtiesParameters;
export type RibbonResponse =
  | Promise<ProviderApiResponse>
  | Promise<SpecialtiesApiResponse>;
