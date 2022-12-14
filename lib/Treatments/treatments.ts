import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { TreatmentsParams } from "./treatmentsParams";
import { TreatmentsResponse } from "./treatmentsResponse";

export class Treatments implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.treatments;
  }

  async find(params: TreatmentsParams) {
    const data = await get<TreatmentsResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
