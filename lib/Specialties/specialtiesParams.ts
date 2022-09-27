import { BasicResponseParams } from "../utills/apiResponseParams";

export interface SpecialtiesParams extends BasicResponseParams {
  search?: string;
  provider_type?: string;
}
