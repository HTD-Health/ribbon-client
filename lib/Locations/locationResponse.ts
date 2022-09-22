import { BasicParamResponse } from "../utills/apiResponse";
import { Location } from "./location";
import { LocationParams } from "./locationParams";

export type LocationResponse = BasicParamResponse<Location, LocationParams>;
