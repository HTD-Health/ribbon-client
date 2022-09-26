import { ExtResultsResponse } from "../utills/apiResponse";
import { ClinicalAreasParams } from "./clinicalAreasParams";
import { ClinicalAreas } from "./clinicalAreas";

export type ClinicalAreasResponse = ExtResultsResponse<
  ClinicalAreas,
  ClinicalAreasParams
>;
