import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { SpecialtyParams } from "./specialtyParams";
import { SpecialtyResponse } from "./specialtyResponse";

export class Specialties implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.specialties;
  }

  async find(params: SpecialtyParams) {
    const data = await get<SpecialtyResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
