import { PropType, SearchParameters } from "./utills/types";

export function buildQuery(params: SearchParameters, prefix?: string) {
  const queryParams: string[] = [];
  for (const param in params) {
    const val = params[param as keyof SearchParameters] as PropType;
    if (!val) continue;
    const key = prefix ? prefix + param : param;
    if (typeof val === "string" || typeof val === "number") {
      queryParams.push(`${key}=${val}`);
    } else if (typeof val === "boolean") {
      queryParams.push(`${key}=${val ? "true" : "false"}`);
    } else if (Array.isArray(val) && val.length > 0) {
      queryParams.push(`${key}=${val.join(",")}`);
    } else if (param === "exclude" && typeof val === "object") {
      queryParams.push(buildQuery(val as SearchParameters, "_excl_"));
    }
  }
  return queryParams.join("&");
}
