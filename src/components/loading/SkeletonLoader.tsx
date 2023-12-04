"use client";

import Grid from "@/components/common/Grid";
import SkeletonCard from "@/components/loading/SkeletonCard";
import { useSearchParams } from "next/navigation";
import PaginationControls from "@/components/options/PaginationControls";

export default function SkeletonLoader() {
  const searchParams = useSearchParams();
  const itemsPerPage = Number(searchParams.get("perPage") ?? "10");

  return (
    <>
      <Grid>
        {Array(itemsPerPage)
          .fill(0)
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </Grid>
      <PaginationControls hasNextPage={false} hasPrevPage={false} />
    </>
  );
}
