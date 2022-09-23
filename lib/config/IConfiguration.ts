export interface IRibbonClientConfiguration {
  url: string;
  apiKey?: string;
  env?: "test" | "prod";
}

export interface IProxyClientConfiguration {
  url: string;
}
