export interface ProviderApiResponse {
  parameters: Parameters;
  data: Provider[];
}

export interface Provider {
  npi: string;
  firstName: string;
  middleName: null;
  lastName: string;
  age: number;
  gender: string;
  ratingsCount: number;
  ratingsAvg: number;
  degrees: string[];
  educations: EducationElement[];
  isPcp: boolean;
  specialties: Specialty[];
  providerTypes: string[];
  languages: string[];
  insurances: Insurance[];
  locations: Location[];
  onlineProfiles: OnlineProfile[];
  panelDemographics: PanelDemographics;
  clinicalAreas: ClinicalArea[];
  conditions: Condition[];
  treatments: Condition[];
  procedures: Procedure[];
  performance: Performance;
}

export type Gender = "m" | "f";

export interface ClinicalArea {
  uuid: string;
  display: string;
  conditions: Condition[];
  treatments: Condition[];
}

export interface Condition {
  uuid: string;
  display: string;
}

export interface EducationElement {
  type: string;
  education: EducationEducation;
}

export interface EducationEducation {
  name: string;
  uuid: string;
}

export interface Insurance {
  uuid: string;
  carrierAssociation: Carrier;
  carrierBrand: Carrier;
  carrierName: Carrier;
  state: null;
  planName: string;
  planType: PlanType | null;
  metalLevel: null;
  displayName: string;
  network: null;
  confidence: number;
  category: Category;
  codes: string[];
}

export enum Carrier {
  Aetna = "Aetna",
  BCBSAssociation = "BCBS Association",
  Bcbs = "BCBS",
  BlueCrossBlueShield = "Blue Cross Blue Shield",
  Humana = "Humana",
  UnitedHealthcare = "UnitedHealthcare",
}

export enum Category {
  Group = "Group",
  MedicareAdvantage = "Medicare Advantage",
}

export enum PlanType {
  Epo = "EPO",
  HmoHno = "HMO/HNO",
  Pos = "POS",
  Ppo = "PPO",
  PpoEpo = "PPO/EPO",
}

export interface Location {
  name: null | string;
  uuid: string;
  faxes: Fax[];
  address: string;
  latitude: number;
  longitude: number;
  confidence: number;
  insurances: Insurance[];
  phoneNumbers: PhoneNumber[];
  locationTypes: string[];
  addressDetails: AddressDetails;
  googleMapsLink: string;
  ahaID?: string;
  versionID?: string;
  parentAhaID?: string;
}

export interface AddressDetails {
  zip: string;
  city: string;
  state: string;
  street: null | string;
  addressLine1: null | string;
  addressLine2: null | string;
}

export interface Fax {
  fax: string;
  details: Details;
}

export enum Details {
  Primary = "primary",
  Secondary = "secondary",
}

export interface PhoneNumber {
  phone: string;
  details: Details;
}

export interface OnlineProfile {
  url: string;
}

export interface PanelDemographics {
  ages: string[];
  sexes: string;
}

export interface Procedure {
  cost: Cost;
  uuid: string;
  display: string;
  quality: Quality;
}

export interface Cost {
  costIndex: number | null;
}

export interface Quality {
  experienceIndex: number;
}

export interface Specialty {
  uuid: string;
  taxonomyCode: string;
  boardSpecialty: string;
  boardSubSpecialty: string;
  nonMdSpecialty: null;
  nonMdSubSpecialty: null;
  providerName: string;
  colloquial: string;
  display: string;
  taxonomy1: string;
  taxonomy2: string;
  taxonomy3: null | string;
  providerType: string;
  isPrimary: boolean;
}

export interface Parameters {
  totalCount: number;
}
