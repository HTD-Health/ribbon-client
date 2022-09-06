import { RibbonResponse, SearchParameters } from "./types";

export interface IFindable {
  find(params: SearchParameters): RibbonResponse;
}
