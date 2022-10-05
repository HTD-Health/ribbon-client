import { ExtResultsResponse } from "../utills/apiResponse";
import { ClinicalAreasParams } from "./clinicalAreasParams";
import { ClinicalArea } from "./clinicalArea";

export type ClinicalAreasResponse = ExtResultsResponse<
  ClinicalArea,
  ClinicalAreasParams
>;
