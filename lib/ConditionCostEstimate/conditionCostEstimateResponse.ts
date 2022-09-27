import { Gender, UuidDisplay } from "../utills/types";

export interface ConditionCostEstimateResponse {
  parameters: {
    conditions: UuidDisplay[];
    member_age: number;
    member_zip: string;
    member_gender: Gender;
  };
  data: {
    cost_estimates: {
      one_year: number;
      five_year: number;
      ten_year: number;
      lifetime: number;
    };
  };
}
