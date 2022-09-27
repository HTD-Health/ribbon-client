import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { LocationsParams } from "./locationsParams";
import { LocationsResponse } from "./locationsResponse";

export class Locations implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.locations;
  }

  async find(params: LocationsParams) {
    const data = await get<LocationsResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
