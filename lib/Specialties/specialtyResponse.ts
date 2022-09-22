import { ExtResultsResponse } from "../utills/apiResponse";
import { Specialty } from "./specialty";
import { SpecialtyParams } from "./specialtyParams";

export type SpecialtyResponse = ExtResultsResponse<Specialty, SpecialtyParams>;
