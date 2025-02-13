import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="border border-green-400/20 p-6 h-full backdrop-blur-sm"
        >
          <Skeleton className="h-4 w-24 mb-2 bg-green-400/20" />
          <Skeleton className="h-6 w-3/4 mb-3 bg-green-400/20" />
          <Skeleton className="h-20 mb-6 bg-green-400/20" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 bg-green-400/20" />
            <Skeleton className="h-6 w-16 bg-green-400/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
