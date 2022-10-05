import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { LanguageParams } from "./languageParams";
import { LanguageResponse } from "./languageResponse";

export class Languages implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.languages;
  }

  async find(params: LanguageParams) {
    const data = await get<LanguageResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
