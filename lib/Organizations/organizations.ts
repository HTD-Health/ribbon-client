import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { OrganizationParams } from "./organizationParams";
import { OrganizationResponse } from "./organizationResponse";

export class Organizations implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.organizations;
  }

  async find(params: OrganizationParams) {
    const data = await get<OrganizationResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
