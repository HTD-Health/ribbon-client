import { BasicResponseParams } from "../utills/apiResponseParams";
import { TreatmentType } from "./treatmentType";

export interface TreatmentsParams extends BasicResponseParams {
  search?: string;
  specialty_ids?: string[];
  type?: TreatmentType;
}
