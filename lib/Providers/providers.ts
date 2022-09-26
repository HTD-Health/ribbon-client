import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ProvidersParams } from "./providersParams";
import { ProvidersResponse } from "./providersResponse";

export class Providers implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.providers;
  }

  async find(params: ProvidersParams) {
    const data = await get<ProvidersResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
