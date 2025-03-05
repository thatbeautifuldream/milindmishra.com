"use client";

import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TExperienceLetterProps = {
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  companyEmail: string;
  letterDate: string;
  employeeName: string;
  position: string;
  startDate: string;
  endDate: string;
  content: string;
  signerName: string;
  signerPosition: string;
};

export function ExperienceLetter({
  companyName,
  companyLogo,
  companyAddress,
  companyEmail,
  letterDate,
  employeeName,
  position,
  startDate,
  endDate,
  content,
  signerName,
  signerPosition,
}: TExperienceLetterProps) {
  return (
    <div className="border border-green-400/20 p-6 sm:p-8 hover:border-green-400 transition-colors w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center">
          <div className="h-8 w-8 relative mr-3">
            <Image
              src={companyLogo}
              alt={`${companyName} Logo`}
              fill
              className="object-contain rounded-full"
            />
          </div>
          <h2
            className={cn(
              "text-2xl text-green-50",
              bricolageGrotesque.className
            )}
          >
            {companyName}
          </h2>
        </div>
        <div className="text-right text-green-50 text-sm">
          <p>{companyAddress}</p>
          <p>{companyEmail}</p>
        </div>
      </div>

      {/* Date */}
      <div className="mb-6 text-green-50">
        <p>{letterDate}</p>
      </div>

      {/* Salutation */}
      <div className="mb-6 text-green-50">
        <p>To Whomsoever It May Concern:</p>
      </div>

      {/* Letter Content */}
      <div className="space-y-4 leading-relaxed text-green-50">
        <p>
          This letter is to certify that {employeeName} has been employed with{" "}
          {companyName} as a {position} from {startDate} to {endDate}.
        </p>

        <p>{content}</p>
      </div>

      {/* Signature */}
      <div className="mt-12">
        <p className="text-green-50">Sincerely,</p>

        <div className="mt-2">
          <p className={cn("text-green-50", bricolageGrotesque.className)}>
            {signerName}
          </p>
          <p className="text-green-50 text-sm">{signerPosition}</p>
        </div>
      </div>
    </div>
  );
}
