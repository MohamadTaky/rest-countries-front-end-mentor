"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../common/Button";

type PaginationControlsProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export default function PaginationControls({ hasPrevPage, hasNextPage }: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? "1");
  const itemsPerPage = Number(searchParams.get("perPage") ?? "10");

  const handlePrevClick = () => router.push(`?page=${currentPage - 1}&perPage=${itemsPerPage}`);
  const handleNextClick = () => router.push(`?page=${currentPage + 1}&perPage=${itemsPerPage}`);

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <Button disabled={!hasPrevPage} onClick={handlePrevClick} shape="circle">
        <ChevronLeftIcon />
      </Button>
      <Button shape="circle" asChild>
        <p>{currentPage}</p>
      </Button>
      <Button disabled={!hasNextPage} onClick={handleNextClick} shape="circle">
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
