import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ProviderParams } from "./providerParams";
import { ProviderResponse } from "./providerResponse";

export class Providers implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.providers;
  }

  async find(params: ProviderParams) {
    const data = await get<ProviderResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
