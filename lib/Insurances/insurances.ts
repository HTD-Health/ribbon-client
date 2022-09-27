import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { InsurancesParams } from "./insurancesParams";
import { InsurancesResponse } from "./insurancesResponse";

export class Insurances implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.insurances;
  }

  async find(params: InsurancesParams) {
    const data = await get<InsurancesResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
