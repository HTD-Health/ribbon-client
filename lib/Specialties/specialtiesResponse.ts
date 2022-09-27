import { ExtResultsResponse } from "../utills/apiResponse";
import { Specialty } from "./specialty";
import { SpecialtiesParams } from "./specialtiesParams";

export type SpecialtiesResponse = ExtResultsResponse<
  Specialty,
  SpecialtiesParams
>;
