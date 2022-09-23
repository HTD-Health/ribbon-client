"use strict";

import api from "./config/axiosInstance";
import { ClinicalAreas } from "./ClinicalAreas";
import {
  IProxyClientConfiguration,
  IRibbonClientConfiguration,
} from "./config/IConfiguration";
import { Insurances } from "./Insurances";
import { Locations } from "./Locations";
import { Organizations } from "./Organizations";
import { Providers } from "./Providers";
import { Specialties } from "./Specialties";

// main ribbon instance
export class Ribbon {
  public readonly ClinicalAreas: ClinicalAreas;
  public readonly Insurances: Insurances;
  public readonly Locations: Locations;
  public readonly Organizations: Organizations;
  public readonly Providers: Providers;
  public readonly Specialties: Specialties;

  constructor(config: IRibbonClientConfiguration | IProxyClientConfiguration) {
    this.ClinicalAreas = new ClinicalAreas();
    this.Insurances = new Insurances();
    this.Locations = new Locations();
    this.Organizations = new Organizations();
    this.Providers = new Providers();
    this.Specialties = new Specialties();

    api.defaults.baseURL = config.url;
    const c = <IRibbonClientConfiguration>config;
    if (c?.apiKey) {
      if (c?.env === "test")
        api.defaults.headers.common["x-api-key"] = c.apiKey;
      else {
        api.defaults.headers.common["authorization"] = `Token ${c.apiKey}`;
      }
    }
  }
}
