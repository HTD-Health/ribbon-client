import { BasicParamResponse } from "../utills/apiResponse";
import { Organization } from "./organization";
import { OrganizationsParams } from "./organizationsParams";

export type OrganizationsResponse = BasicParamResponse<
  Organization,
  OrganizationsParams
>;
