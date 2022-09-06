import { ProviderParameters } from "./Providers/providerParameters";
import { PropType } from "./utills/types";
import { SpecialtiesParameters } from "./Specialties/specialtiesParameters";
import { decamelize } from "humps";

type queryParams = ProviderParameters | SpecialtiesParameters;

export function buildQuery(params: queryParams) {
  let query = "";
  for (const param in params) {
    const val = params[param as keyof queryParams] as PropType;
    if (!val) continue;
    query = `${decamelize(param)}=`;
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
