import endpoints from "../endpoints";
import { buildQuery } from "../buildQuery";
import { SpecialtiesParameters } from "./specialtiesParameters";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { SpecialtiesApiResponse } from "./specialtiesApiResponse";

export class Specialty implements IFindable {
  private readonly endpoint: string;

  constructor() {
    this.endpoint = endpoints.specialties;
  }

  async find(params: SpecialtiesParameters) {
    const data = await get<SpecialtiesApiResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
