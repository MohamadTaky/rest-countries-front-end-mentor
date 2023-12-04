import Card from "@/components/common/Card";

export default function SkeletonCard() {
  return (
    <Card>
      <div className="h-32 w-full animate-[pulse_4s_ease-in-out_infinite] bg-slate-700" />
      <div className="my-4 mb-4 space-y-2 p-4">
        <div className="h-4 w-40 max-w-full animate-[pulse_4s_ease-in-out_infinite] rounded-lg bg-slate-700" />
        <div className="h-4 w-32 max-w-full animate-[pulse_4s_ease-in-out_infinite] rounded-lg bg-slate-700" />
        <div className="h-4 w-40 max-w-full animate-[pulse_4s_ease-in-out_infinite] rounded-lg bg-slate-700" />
        <div className="h-4 w-32 max-w-full animate-[pulse_4s_ease-in-out_infinite] rounded-lg bg-slate-700" />
      </div>
    </Card>
  );
}
