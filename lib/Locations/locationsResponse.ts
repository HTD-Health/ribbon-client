import { BasicParamResponse } from "../utills/apiResponse";
import { Location } from "./location";
import { LocationsParams } from "./locationsParams";

export type LocationsResponse = BasicParamResponse<Location, LocationsParams>;
