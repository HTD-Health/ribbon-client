import { Speciality } from "./speciality";

export interface SpecialtiesApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Speciality[];
}
