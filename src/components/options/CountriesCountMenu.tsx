"use client";

import * as DropDown from "@/components/common/DropDown";
import { useRouter, useSearchParams } from "next/navigation";

const perPageOptions = [5, 10, 15, 20];

export default function CountriesCountMenu() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSelect = (value: number) => {
    const currentPage = searchParams.get("page") ?? "1";
    router.push(`?page=${currentPage}&perPage=${value}`);
  };

  return (
    <DropDown.Menu>
      <DropDown.Trigger>
        <span>{searchParams.get("perPage") ?? "10"} items per page</span>
      </DropDown.Trigger>
      <DropDown.Content>
        {perPageOptions.map((option) => (
          <DropDown.Item key={option} onSelect={() => handleSelect(option)}>
            {option}
          </DropDown.Item>
        ))}
      </DropDown.Content>
    </DropDown.Menu>
  );
}
