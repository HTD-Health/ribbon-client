import { BasicResponseParams } from "../utills/apiResponseParams";

export interface SpecialtyParams extends BasicResponseParams {
  search?: string;
  provider_type?: string;
}
