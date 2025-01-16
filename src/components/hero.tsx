import { details } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
// import BookACallButton from "./book-a-call-button";

export function Hero() {
  const gradient =
    "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent";

  return (
    <>
      <section>
        <div className="">
          <div className="max-w-3xl mx-auto ~space-y-2/4 text-center">
            <h1
              className={cn(
                "~text-3xl/6xl font-bold whitespace-nowrap",
                gradient,
                bricolageGrotesque.className
              )}
            >
              Designing & developing
            </h1>
            <h1
              className={cn(
                "~text-3xl/6xl font-bold whitespace-nowrap",
                bricolageGrotesque.className
              )}
            >
              software <span className={cn(gradient)}>that delivers</span>
            </h1>
            <p className="text-gray-400 ~text-sm/lg">
              {details.person.profile.bio}
            </p>
            {/* <BookACallButton /> */}
          </div>
        </div>
      </section>
    </>
  );
}
