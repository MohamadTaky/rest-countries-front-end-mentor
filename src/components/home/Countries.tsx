import getCountries from "@/api/getCountries";
import CountryList from "@/components/home/CountryList";
import PaginationControls from "@/components/options/PaginationControls";
import { HelpCircleIcon } from "lucide-react";

type CountriesProps = {
  start: number;
  end: number;
  region: string;
  search: string;
};

export default async function Countries({ start, end, region, search }: CountriesProps) {
  const response = await getCountries(region, search);
  if (response.status === 404)
    return (
      <>
        <div className="mt-32 flex flex-col items-center gap-4">
          <HelpCircleIcon size={112} />
          <p className="text-3xl">Not found</p>
        </div>
      </>
    );

  const filteredCountries =
    region && search
      ? response.data.filter((country) => country.region.toLowerCase() === (region === "america" ? "americas" : region))
      : response.data;
  return (
    <>
      <CountryList countries={filteredCountries.slice(start, end + 1)} />
      <PaginationControls hasPrevPage={start > 0} hasNextPage={end < response.data.length} />
    </>
  );
}
