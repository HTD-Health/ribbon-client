"use strict";

import { Providers } from "./Providers/providers";
import { Specialty } from "./Specialties/specialities";
import api from "./config/axiosInstance";
import { IConfiguration } from "./config/IConfiguration";

// main ribbon instance
export class Ribbon {
  public readonly Providers: Providers;
  public readonly Specialties: Specialty;

  constructor(config: IConfiguration) {
    //this.ProviderTypes = providerTypes;
    this.Providers = new Providers();
    this.Specialties = new Specialty();
    api.defaults.baseURL = config.proxyUrl;
  }
}
