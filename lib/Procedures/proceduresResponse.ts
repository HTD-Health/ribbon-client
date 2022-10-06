import { ExtResultsResponse } from "../utills/apiResponse";
import { Procedure } from "./procedure";
import { ProceduresParams } from "./proceduresParams";

export type ProceduresResponse = ExtResultsResponse<
  Procedure,
  ProceduresParams
>;
