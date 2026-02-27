import { Skeleton } from "@/components/ui/skeleton";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function GistLoading() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2
          className={cn(
            "~text-2xl/3xl font-bold",
            bricolageGrotesque.className
          )}
        >
          My Gists
        </h2>
        <Skeleton className="h-10 w-24" />
      </div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border border-green-400/20 p-4 space-y-3">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
