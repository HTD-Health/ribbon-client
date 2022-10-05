import { ExtResultsResponse } from "../utills/apiResponse";
import { Treatment } from "./treatment";
import { TreatmentParams } from "./treatmentParams";

export type TreatmentResponse = ExtResultsResponse<Treatment, TreatmentParams>;
