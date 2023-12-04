"use client";

import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button className="px-8" onClick={router.back}>
      <span>&larr;</span> Back
    </Button>
  );
}
