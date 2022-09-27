import { BasicParamResponse } from "../utills/apiResponse";
import { Provider } from "./provider";
import { ProvidersParams } from "./providersParams";

export type ProvidersResponse = BasicParamResponse<Provider, ProvidersParams>;
