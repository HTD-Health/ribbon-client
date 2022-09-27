import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { OrganizationsParams } from "./organizationsParams";
import { OrganizationsResponse } from "./organizationsResponse";

export class Organizations implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.organizations;
  }

  async find(params: OrganizationsParams) {
    const data = await get<OrganizationsResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
