import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { ProceduresParams } from "./proceduresParams";
import { ProceduresResponse } from "./proceduresResponse";

export class Procedures implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.procedures;
  }

  async find(params: ProceduresParams) {
    const data = await get<ProceduresResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
