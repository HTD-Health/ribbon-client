import { UuidDisplay } from "../utills/types";
import { ClinicalAreaType } from "./clinicalAreaType";

export interface ClinicalArea {
  uuid: string;
  display: string;
  types?: ClinicalAreaType[];
  conditions?: UuidDisplay[];
  treatments?: UuidDisplay[];
  specialties?: UuidDisplay[];
}
