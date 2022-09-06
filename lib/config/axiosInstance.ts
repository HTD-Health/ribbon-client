import axios, { AxiosResponse } from "axios";
import { camelizeKeys } from "humps";

const api = axios.create({});

api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

export default api;
