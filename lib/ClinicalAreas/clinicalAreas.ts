import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ClinicalAreaParams } from "./ClinicalAreaParams";
import { ClinicalAreaResponse } from "./clinicalAreaResponse";

export class ClinicalAreas implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.clinicalAreas;
  }

  async find(params: ClinicalAreaParams) {
    const data = await get<ClinicalAreaResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
