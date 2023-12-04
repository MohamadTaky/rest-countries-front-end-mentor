"use client";

import useDebounce from "@/hooks/useDebounce";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const debouncedCallback = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (!e.target.value) params.delete("search");
    else params.set("search", e.target.value);
    router.replace(`?${params.toString()}`);
  }, 1000);

  return (
    <div className="flex items-center rounded-md bg-element-3 shadow-md outline-dashed outline-2 outline-offset-4 outline-transparent focus-within:outline-current">
      <label htmlFor="search" className="pl-4 md:pl-6">
        <SearchIcon />
      </label>
      <input
        type="text"
        id="search"
        className="h-10 w-full bg-transparent px-4 py-2 font-light outline-none placeholder:text-input md:px-8 md:py-4"
        placeholder="Search for a country..."
        onChange={debouncedCallback}
      />
    </div>
  );
}
