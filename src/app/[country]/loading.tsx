import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader2Icon className="h-16 w-16 animate-spin md:h-24 md:w-24" />
    </div>
  );
}
