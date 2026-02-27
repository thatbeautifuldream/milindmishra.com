import { Skeleton } from "@/components/ui/skeleton";

export default function GistDetailLoading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-12 w-3/4 mb-4" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-green-400/20 p-4">
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-40 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
