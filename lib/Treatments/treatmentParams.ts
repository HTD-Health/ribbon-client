import { BasicResponseParams } from "../utills/apiResponseParams";
import { TreatmentType } from "./treatmentType";

export interface TreatmentParams extends BasicResponseParams {
  search?: string;
  specialty_ids?: string[];
  type?: TreatmentType;
}
