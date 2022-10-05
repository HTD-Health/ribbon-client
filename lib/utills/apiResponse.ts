type ResponseParameters<T> = T & {
  total_count?: number;
  page?: number;
  page_size?: number;
  sort_by?: string;
  distance?: number;
  geo?: {
    latitude: number;
    longitude: number;
  };
  address?: string;
  fields?: string[];
  APIGatewayToken?: string;
};

export interface BasicResponse<T> {
  count: number;
  data: T[];
}

export interface BasicParamResponse<T, P> {
  parameters: ResponseParameters<P>;
  data: T[];
}

export interface ExtResultsResponse<T, P> {
  count: number;
  next: string | null;
  previous: string | null;
  parameters?: ResponseParameters<P>;
  results: T[];
}
