"use strict";

import api from "./config/axiosInstance";
import { ClinicalAreas } from "./ClinicalAreas";
import { IConfiguration } from "./config/IConfiguration";
import { Insurances } from "./Insurances";
import { Locations } from "./Locations";
import { Providers } from "./Providers";
import { Specialties } from "./Specialties";

// main ribbon instance
export class Ribbon {
  public readonly ClinicalAreas: ClinicalAreas;
  public readonly Insurances: Insurances;
  public readonly Locations: Locations;
  public readonly Providers: Providers;
  public readonly Specialties: Specialties;

  constructor(config: IConfiguration) {
    this.ClinicalAreas = new ClinicalAreas();
    this.Insurances = new Insurances();
    this.Locations = new Locations();
    this.Providers = new Providers();
    this.Specialties = new Specialties();

    api.defaults.baseURL = config.url;
    if (config?.apiKey) {
      if (config?.env === "test")
        api.defaults.headers.common["x-api-key"] = config.apiKey;
      else {
        api.defaults.headers.common["authorization"] = `Token ${config.apiKey}`;
      }
    }
  }
}
