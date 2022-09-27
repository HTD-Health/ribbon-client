import { UuidDisplay } from "../utills/types";
import { ConditionModule } from "./conditionModule";

export interface Condition {
  uuid: string;
  display: string;
  modules: ConditionModule[];
  specialties: UuidDisplay[] | null;
}
