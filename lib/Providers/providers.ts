import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { ProviderApiResponse } from "./types";
import { ProviderParameters } from "./providerParameters";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";

export class Providers implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.providers;
  }
  async find(params: ProviderParameters) {
    const data = await get<ProviderApiResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
