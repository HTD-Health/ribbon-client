import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ClinicalAreasParams } from "./ClinicalAreasParams";
import { ClinicalAreasResponse } from "./clinicalAreasResponse";

export class ClinicalAreas implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.clinicalAreas;
  }

  async find(params: ClinicalAreasParams) {
    const data = await get<ClinicalAreasResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
