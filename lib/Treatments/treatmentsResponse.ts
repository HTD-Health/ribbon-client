import { ExtResultsResponse } from "../utills/apiResponse";
import { Treatment } from "./treatment";
import { TreatmentsParams } from "./treatmentsParams";

export type TreatmentsResponse = ExtResultsResponse<
  Treatment,
  TreatmentsParams
>;
