export interface IRibbonClientConfiguration {
  url: string;
  apiKey: string;
  target: "ribbon" | "ribbon-test";
}

export interface IProxyClientConfiguration {
  url: string;
  target: "proxy";
}

export type IConfiguration =
  | IRibbonClientConfiguration
  | IProxyClientConfiguration;
