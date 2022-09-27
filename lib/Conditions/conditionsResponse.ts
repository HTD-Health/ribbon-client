import { ExtResultsResponse } from "../utills/apiResponse";
import { Condition } from "./condition";
import { ConditionsParams } from "./conditionsParams";

export type ConditionsResponse = ExtResultsResponse<
  Condition,
  ConditionsParams
>;
