import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { LocationParams } from "./locationParams";
import { LocationResponse } from "./locationResponse";

export class Locations implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.locations;
  }

  async find(params: LocationParams) {
    const data = await get<LocationResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
