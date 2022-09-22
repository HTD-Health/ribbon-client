import { BasicResponseParams } from "../utills/apiResponseParams";

export interface InsuranceParams extends BasicResponseParams {
  search?: string;
  uuid?: string;
  carrier_association?: string;
  carrier_brand?: string;
  carrier_name?: string;
  /**
   *  Two letter abbreviated state code input to return plans for that state.
   */
  state?: string;
  plan_name?: string;
  plan_type?: string;
  display_name?: string;
  category?: string;
  codes?: string;
  partial_codes?: string;
}
