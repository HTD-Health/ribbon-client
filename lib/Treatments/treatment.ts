import { UuidDisplay } from "../utills/types";
import { TreatmentType } from "./treatmentType";

export interface Treatment {
  uuid: string;
  display: string;
  type?: TreatmentType[];
  specialties: UuidDisplay[];
}
