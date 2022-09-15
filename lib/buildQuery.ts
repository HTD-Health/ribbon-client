import { PropType, SearchParameters } from "./utills/types";
import { decamelize } from "humps";

export function buildQuery(params: SearchParameters) {
  let query = "";
  for (const param in params) {
    const val = params[param as keyof SearchParameters] as PropType;
    if (!val) continue;
    query += `${decamelize(param)}=`;
    if (typeof val === "string" || typeof val === "number") {
      query += `${val}&`;
    } else if (typeof val === "boolean") {
      query += val ? "true&" : "false&";
    } else {
      const joinedArray = val.join(",");
      query += `${joinedArray}&`;
    }
  }
  return query !== "" ? `?${query}` : "";
}
