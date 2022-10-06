import endpoints from "../endpoints";

import { buildQuery } from "../buildQuery";
import { IFindable } from "../utills/iFindable";
import { get } from "../utills/httpMethods";
import { LanguagesParams } from "./languagesParams";
import { LanguagesResponse } from "./languagesResponse";

export class Languages implements IFindable {
  private readonly endpoint: string;
  constructor() {
    this.endpoint = endpoints.languages;
  }

  async find(params: LanguagesParams) {
    const data = await get<LanguagesResponse>({
      endpoint: this.endpoint,
      query: buildQuery(params),
    });
    return data.data;
  }
}
