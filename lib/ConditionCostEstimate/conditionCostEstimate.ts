import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ConditionCostEstimateParams } from "./conditionCostEstimateParams";
import { ConditionCostEstimateResponse } from "./conditionCostEstimateResponse";

export class ConditionCostEstimate implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.conditionCostEstimate;
  }

  async find(params: ConditionCostEstimateParams) {
    const data = await get<ConditionCostEstimateResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
