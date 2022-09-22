import { BasicResponseParams } from "../utills/apiResponseParams";
import { ClinicalAreaType } from "./clinicalAreaType";

export interface ClinicalAreaParams extends BasicResponseParams {
  search?: string;
  clinical_area?: string;
  specialty_ids?: string[];
  condition?: string;
  condition_ids?: string[];
  treatment?: string;
  treatment_ids?: string[];
  type?: ClinicalAreaType;
}
