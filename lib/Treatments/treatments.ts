import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { TreatmentParams } from "./treatmentParams";
import { TreatmentResponse } from "./treatmentResponse";

export class Treatments implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.treatments;
  }

  async find(params: TreatmentParams) {
    const data = await get<TreatmentResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
