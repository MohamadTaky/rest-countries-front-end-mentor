"use client";

import * as DropDown from "@/components/common/DropDown";
import { useRouter, useSearchParams } from "next/navigation";

const regions = ["africa", "america", "asia", "europe", "oceania", "all"];

export default function FilterMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (region: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (region === "all") params.delete("region");
    else params.set("region", region);
    router.push(`?${params.toString()}`);
  };

  return (
    <DropDown.Menu>
      <DropDown.Trigger className="capitalize">{searchParams.get("region") ?? "all"}</DropDown.Trigger>
      <DropDown.Content>
        {regions.map((region) => (
          <DropDown.Item key={region} onSelect={() => handleSelect(region)} className="capitalize">
            {region}
          </DropDown.Item>
        ))}
      </DropDown.Content>
    </DropDown.Menu>
  );
}
