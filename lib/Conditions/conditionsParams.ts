import { BasicResponseParams } from "../utills/apiResponseParams";
import { ConditionModule } from "./conditionModule";

export interface ConditionsParams extends BasicResponseParams {
  search?: string;
  specialty_ids?: string[];
  module?: ConditionModule;
}
