export interface ProviderParameters {
  npis?: TypeInfer<string[]>;
  locationIds?: TypeInfer<string[]>;
  address?: string;
  specialityIds?: string[];
  speciality?: string;
  specialityIdsPrimary?: string[];
  insuranceIds?: string[];
  insuranceCarrierName?: string;
  maxAge?: number;
  minAge?: number;
  gender?: "m" | "f";
  name?: string;
  location?: string;
  locationInsuranceIds?: string[];
  language?: string;
  locationWithinDistance?: boolean;
  /**
   * Integer input (from 0 to 10) to filter to only providers above the inputted value for the ratings_avg field.
   *  @minimum 0
   *  @maximum 10
   */
  minRating?: number;
  providerTypes?: string[];
  minLocationConfidence?: number;
  /**
   * Integer input (0-5) of the minimum confidence location you wish the returned providers to have
   * @minimum 0
   * @maximum 5
   */
  minConfidence?: number;
  excluded?: keyof ProviderParameters;
}

type TypeInfer<T> = T | (T & { excluded: boolean });
