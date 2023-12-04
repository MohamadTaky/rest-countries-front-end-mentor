import { ServerCountry } from "@/types/country.type";
import axios, { AxiosResponse, AxiosResponseTransformer } from "axios";

type GetCountries = Pick<ServerCountry, "name" | "flags" | "region" | "capital" | "population">[];

export default async function getCountries(region: string, search: string): Promise<AxiosResponse<GetCountries>> {
  const transformResponse = (axios.defaults.transformResponse as AxiosResponseTransformer[]).concat(
    getCountriesTransformer,
  );
  const validateStatus = (status: number) => (status >= 200 && status < 300) || status === 404;
  if (search) {
    return axios.get(`https://restcountries.com/v3.1/name/${search}?fields=name,flags,region,capital,population`, {
      transformResponse,
      validateStatus,
    });
  }
  if (region)
    return axios.get(`https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,capital,population`, {
      transformResponse,
      validateStatus,
    });
  return axios.get("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population", {
    transformResponse,
    validateStatus,
  });
}

function getCountriesTransformer(countries: GetCountries) {
  if (!Array.isArray(countries)) return countries;
  return countries.map((country) => ({ ...country, population: Intl.NumberFormat().format(country.population) }));
}
