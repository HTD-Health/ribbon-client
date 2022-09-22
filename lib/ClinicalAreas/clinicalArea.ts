import { ClinicalAreaType } from "./clinicalAreaType";

export interface ClinicalArea {
  uuid: string;
  display: string;
  types: ClinicalAreaType[];
  conditions: {
    uuid: string;
    display: string;
  }[];
  treatments: {
    uuid: string;
    display: string;
  }[];
  specialties: {
    uuid: string;
    display: string;
  }[];
}
