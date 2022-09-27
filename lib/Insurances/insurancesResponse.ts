import { ExtResultsResponse } from "../utills/apiResponse";
import { Insurance } from "./insurance";
import { InsurancesParams } from "./insurancesParams";

export type InsurancesResponse = ExtResultsResponse<
  Insurance,
  InsurancesParams
>;
