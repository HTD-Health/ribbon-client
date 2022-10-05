import { ClinicalArea } from "../ClinicalAreas";
import { Insurance } from "../Insurances";
import { Location } from "../Locations";
import { Organization } from "../Organizations";
import { Specialty } from "../Specialties";
import { Gender, UuidDisplay } from "../utills/types";

/**
 * API Reference
 * https://ribbon.readme.io/docs/search-for-doctors
 */
export interface Provider {
  npi: string;
  first_name?: string;
  middle_name?: string | null;
  last_name?: string;
  age?: number;
  gender?: Gender;
  ratings_count?: number;
  ratings_avg?: number;
  degrees?: string[];
  educations?: {
    type: string;
    education: {
      name: string;
      uuid: string;
    };
  }[];
  is_pcp?: boolean;
  specialties?: ProviderSpecialty[];
  provider_types?: string[];
  languages?: string[];
  organizations?: Organization[];
  insurances?: Insurance[];
  locations?: ProviderLocation[];
  online_profiles?: {
    url: string;
  }[];
  panel_demographics?: {
    ages: string[];
    sexes: string;
  };
  clinical_areas?: ClinicalArea[];
  conditions?: UuidDisplay[];
  treatments?: UuidDisplay[];
  procedures?: {
    cost: {
      cost_index: number | null;
    };
    uuid: string;
    display: string;
    quality: {
      experience_index: number | null;
    };
  }[];
  performance?: {
    aggregate?: {
      cost: {
        efficiency_index: number;
      };
      quality?: {
        outcomes_index: number;
      };
    };
  };
}

interface ProviderLocation extends Location {
  faxes?: {
    fax: string;
    details: string;
  }[];
}

interface ProviderSpecialty extends Specialty {
  is_primary?: boolean;
}
