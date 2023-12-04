import axios, { AxiosResponse, AxiosResponseTransformer } from "axios";
import { ServerCountry } from "@/types/country.type";

type GetCountry = Pick<
  ServerCountry,
  "flags" | "name" | "population" | "region" | "subregion" | "capital" | "tld" | "languages" | "currencies" | "borders"
>[];

export default async function getCountry(country: string): Promise<ReturnType<typeof countryResponseTransformer>> {
  const response: AxiosResponse<GetCountry> = await axios.get(
    `https://restcountries.com/v3.1/name/${country}?fullText=true&fields=flags,name,population,region,subregion,capital,tld,languages,currencies,borders`,
    {
      transformResponse: (axios.defaults.transformResponse as AxiosResponseTransformer[]).concat(
        countryResponseTransformer,
      ),
      params: {},
    },
  );
  return response.data as unknown as ReturnType<typeof countryResponseTransformer>;
}

async function countryResponseTransformer(data: GetCountry) {
  const country = data[0];
  const transformedCountry = {
    ...country,
    name: {
      ...country.name,
      nativeName: Object.values(country.name.nativeName)
        .map((name) => name.common)
        .join(", "),
    },
    capital: country.capital.join(","),
    population: Intl.NumberFormat().format(country.population),
    tld: Object.values(country.tld).join(","),
    currencies: Object.values(country.currencies)
      .map((value) => value.name)
      .join(", "),
    languages: Object.values(country.languages).join(", "),
    borders: await axios.all(
      country.borders.map(async (border) => {
        const response: AxiosResponse<Pick<ServerCountry, "name">> = await axios.get(
          `https://restcountries.com/v3.1/alpha/${border}?fullText=true&fields=name`,
        );
        return response.data.name.common;
      }),
    ),
  };

  return transformedCountry;
}
