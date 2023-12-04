import Countries from "@/components/home/Countries";
import CountriesCountMenu from "@/components/options/CountriesCountMenu";
import FilterMenu from "@/components/options/FilterMenu";
import SearchBar from "@/components/options/SearchBar";
import { Suspense } from "react";
import SkeletonLoader from "./loading";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
    perPage: string;
    region: string;
    search: string;
  };
}) {
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.page ?? "1");
  const itemsPerPage = Number(searchParams.perPage ?? "10");
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;
  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
        <SearchBar />
        <CountriesCountMenu />
        <FilterMenu />
      </div>
      <Suspense key={params.toString()} fallback={<SkeletonLoader />}>
        {/* @ts-ignore */}
        <Countries start={start} end={end} region={searchParams.region} search={searchParams.search} />
      </Suspense>
    </>
  );
}
