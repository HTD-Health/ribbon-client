import { Options } from "./types";
import api from "../config/axiosInstance";

export async function get<T>(options: Options) {
  const url = `${options.endpoint}${options.query ?? ""}`;
  return await api.get<T>(url);
}
