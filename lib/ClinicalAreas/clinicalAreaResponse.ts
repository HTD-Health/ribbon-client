import { ExtResultsResponse } from "../utills/apiResponse";
import { ClinicalAreaParams } from "./clinicalAreaParams";
import { ClinicalAreas } from "./clinicalAreas";

export type ClinicalAreaResponse = ExtResultsResponse<
  ClinicalAreas,
  ClinicalAreaParams
>;
