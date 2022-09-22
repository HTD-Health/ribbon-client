import { ExtResultsResponse } from "../utills/apiResponse";
import { Insurance } from "./insurance";
import { InsuranceParams } from "./insuranceParams";

export type InsuranceResponse = ExtResultsResponse<Insurance, InsuranceParams>;
