import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { InsuranceParams } from "./insuranceParams";
import { InsuranceResponse } from "./insuranceResponse";

export class Insurances implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.insurances;
  }

  async find(params: InsuranceParams) {
    const data = await get<InsuranceResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
