import { BasicResponseParams } from "../utills/apiResponseParams";
import { InterfaceFields } from "../utills/InterfaceFields";
import { Gender } from "../utills/types";
import { Provider } from "./provider";

interface ProviderBasicParams extends BasicResponseParams {
  address?: string;
  specialty_ids?: string[];
  specialty?: string;
  specialty_ids_primary?: string[];
  specialty_primary?: string;
  insurance_ids?: string[];
  insurance_carrier_name?: string;
  name?: string;
  location_ids?: string[];
  location_insurance_ids?: string[];
  // lat, lon
  location?: [number, number];
  npis?: string[] | number[]; // when set ignores all other params
  provider_types?: string[];
  /**
   * Integer input (0-5) of the minimum confidence location you wish the returned provider's locations to have
   * @minimum 0
   * @maximum 5
   */
  min_location_confidence?: number; // 0 - 5
  /**
   * Integer input (0-5) of the minimum confidence location you wish the returned providers to have
   * @minimum 0
   * @maximum 5
   */
  min_confidence?: number; // 0 - 5
  gender?: Gender;
  max_age?: number;
  min_age?: number;
  language?: string;
  location_within_distance?: boolean;
  /**
   * Integer input (from 0 to 10) to filter to only providers above the inputted value for the ratings_avg field.
   *  @minimum 0
   *  @maximum 10
   */
  min_rating?: number;

  // based on procedure
  procedure_ids?: string[];
  procedure?: string;
  max_cost_index?: number; //0.0 - 10.0

  // based on focus area
  clinical_area?: string;
  clinical_area_ids?: string[];
  condition?: string;
  condition_ids?: string[];
  treatment?: string;
  treatment_ids?: string[];
  panel_ages?:
    | "Pediatric (0-12)"
    | "Adolescent (13-21)"
    | "Adult (22-44)"
    | "Adult (45-64)"
    | "Senior (65 and over)";
  panel_sexes?: "Both female and male" | "Primarily female" | "Primarily male";

  // based on overall cost and quality scores
  min_outcomes_index?: number; // 1-5
  min_efficiency_index?: number; // 1-5

  // based on organization affiliation
  location_organization_ids?: string[];
}

export interface ProvidersParams extends ProviderBasicParams {
  fields?: InterfaceFields<Provider>[];
  exclude?: ProviderBasicParams;
}
