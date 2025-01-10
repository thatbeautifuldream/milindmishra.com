/* eslint-disable @next/next/no-img-element */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Organization = {
  name: string;
  logo: string;
  description: string;
};

export default function ExperienceTooltip({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center cursor-pointer hover:text-green-400 transition-colors">
            <img
              src={organization.logo}
              alt={`${organization.name} Logo`}
              className="h-6 w-6 mr-2 rounded-full border border-green-400/20"
            />
            {organization.name}
          </div>
        </TooltipTrigger>
        <TooltipContent className="dark py-3">
          <div className="flex gap-3">
            <img
              src={organization.logo}
              alt={`${organization.name} Logo`}
              className="h-6 w-6 mr-2 rounded-full border border-green-400/20"
            />
            <div className="space-y-1">
              <p className="text-[13px] font-medium">{organization.name}</p>
              <p className="text-xs text-muted-foreground">
                {organization.description}
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
