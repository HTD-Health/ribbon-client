import { Gender } from "../utills/types";

export interface ConditionCostEstimateParams {
  condition_ids: string[];
  member_age: number;
  member_zip: string;
  member_gender: Gender;
}
