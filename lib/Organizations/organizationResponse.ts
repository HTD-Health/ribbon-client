import { BasicParamResponse } from "../utills/apiResponse";
import { Organization } from "./organization";
import { OrganizationParams } from "./organizationParams";

export type OrganizationResponse = BasicParamResponse<
  Organization,
  OrganizationParams
>;
