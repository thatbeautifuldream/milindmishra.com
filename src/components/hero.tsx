import { details } from "@/data/resume";
import { serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <>
      <section className="min-h-[80dvh] flex items-center justify-center ~py-16/24">
        <div className="container mx-auto ~px-4/8">
          <div className="max-w-2xl mx-auto ~space-y-3/6 text-center">
            <h1 className={cn("~text-4xl/7xl text-green-400", serif.className)}>
              Hi I&apos;m {details.person.name.first_name}!
            </h1>
            <p className="text-gray-400 ~text-sm/lg">
              {details.person.profile.bio}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
