"use strict";

import api from "./config/axiosInstance";
import { ClinicalAreas } from "./ClinicalAreas";
import { IConfiguration } from "./config/IConfiguration";
import { Insurances } from "./Insurances";
import { Languages } from "./Languages";
import { Locations } from "./Locations";
import { Organizations } from "./Organizations";
import { Providers } from "./Providers";
import { Specialties } from "./Specialties";
import { Treatments } from "./Treatments";
import { ConditionCostEstimate } from "./ConditionCostEstimate";
import { Conditions } from "./Conditions";

// main ribbon instance
export class Ribbon {
  public readonly ClinicalAreas: ClinicalAreas;
  public readonly ConditionCostEstimate: ConditionCostEstimate;
  public readonly Conditions: Conditions;
  public readonly Insurances: Insurances;
  public readonly Languages: Languages;
  public readonly Locations: Locations;
  public readonly Organizations: Organizations;
  public readonly Providers: Providers;
  public readonly Specialties: Specialties;
  public readonly Treatments: Treatments;

  constructor(config: IConfiguration) {
    this.ClinicalAreas = new ClinicalAreas();
    this.ConditionCostEstimate = new ConditionCostEstimate();
    this.Conditions = new Conditions();
    this.Insurances = new Insurances();
    this.Languages = new Languages();
    this.Locations = new Locations();
    this.Organizations = new Organizations();
    this.Providers = new Providers();
    this.Specialties = new Specialties();
    this.Treatments = new Treatments();

    api.defaults.baseURL = config.url;

    if (config.target === "ribbon")
      api.defaults.headers.common["authorization"] = `Token ${config.apiKey}`;
    else if (config.target === "ribbon-test")
      api.defaults.headers.common["x-api-key"] = config.apiKey;
  }
}
