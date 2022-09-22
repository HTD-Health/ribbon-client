import axios, { AxiosResponse } from "axios";

const api = axios.create({});

api.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default api;
