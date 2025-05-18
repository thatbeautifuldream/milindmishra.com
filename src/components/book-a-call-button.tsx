import { Button } from "@/components/ui/button";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, forwardRef } from "react";

const BookACallButton = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>((props, ref) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      data-cal-link="milind/30min"
      data-cal-config='{"layout":"month_view"}'
      className={cn(
        "group transition transform active:scale-95 bg-green-500 text-black hover:bg-green-600",
        bricolageGrotesque.className,
        props.className
      )}
      ref={ref}
      {...props}
    >
      Book a call
      <ArrowRightIcon
        className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5 w-4 h-4"
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
});

BookACallButton.displayName = "BookACallButton";

export default BookACallButton;
