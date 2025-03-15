import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import githubService from "@/services/github/github.service";
import { notFound } from "next/navigation";
import Gists from "./components/gists";

export default async function Page() {
  const gists = await githubService.getGists("thatbeautifuldream");

  if (!gists) {
    return notFound();
  }

  return (
    <div className="min-h-screen">
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        My Gists
      </h2>

      <div className="space-y-4">{gists && <Gists gists={gists} />}</div>
    </div>
  );
}
