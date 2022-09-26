import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { SpecialtiesParams } from "./specialtiesParams";
import { SpecialtiesResponse } from "./specialtiesResponse";

export class Specialties implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.specialties;
  }

  async find(params: SpecialtiesParams) {
    const data = await get<SpecialtiesResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
