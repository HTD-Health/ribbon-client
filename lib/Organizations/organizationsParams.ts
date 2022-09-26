import { BasicResponseParams } from "../utills/apiResponseParams";

/**
 * Organization query parameters
 *
 * API reference https://ribbon.readme.io/docs/search-for-organizations
 */
export interface OrganizationsParams extends BasicResponseParams {
  address?: string;
  name?: string;
  distance?: number;
  // lat, lon,
  location?: [number, number];
}
