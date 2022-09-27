import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ConditionsParams } from "./conditionsParams";
import { ConditionsResponse } from "./conditionsResponse";

export class Conditions implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.conditions;
  }

  async find(params: ConditionsParams) {
    const data = await get<ConditionsResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
