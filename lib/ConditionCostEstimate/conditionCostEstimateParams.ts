export interface ConditionCostEstimateParams {
  condition_ids: string[];
  member_age: number;
  member_zip: string;
  member_gender: "m" | "f";
}
