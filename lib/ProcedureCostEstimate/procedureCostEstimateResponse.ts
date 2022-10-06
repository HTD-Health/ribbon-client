export interface ProcedureCostEstimateResponse {
  parameters: {
    procedures: {
      uuid: string;
      display: string;
    }[];
    member_zip: string;
  };
  data: {
    cost_estimates: {
      minimum: number;
      median: number;
      maximum: number;
    };
  };
}
