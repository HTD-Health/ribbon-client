import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ProcedureCostEstimateParams } from "./procedureCostEstimateParams";
import { ProcedureCostEstimateResponse } from "./procedureCostEstimateResponse";

export class ProcedureCostEstimate implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.procedureCostEstimates;
  }

  async find(params: ProcedureCostEstimateParams) {
    const data = await get<ProcedureCostEstimateResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
