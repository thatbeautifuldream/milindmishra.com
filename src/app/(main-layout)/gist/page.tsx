import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import githubService from "@/services/github/github.service";
import { notFound } from "next/navigation";
import Gists from "./components/gists";
import RevalidateButton from "@/components/revalidate-button";

export default async function Page() {
  const gists = await githubService.getGists("thatbeautifuldream");

  if (!gists) {
    return notFound();
  }

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
        <RevalidateButton path="/gist" />
      </div>

      <div className="space-y-4">{gists && <Gists gists={gists} />}</div>
    </div>
  );
}
