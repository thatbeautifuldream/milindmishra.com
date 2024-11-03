import { Globe } from "./globe";
import { details } from "@/data/resume";
import { ResumeModal } from "./resume-modal";
import { useState } from "react";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="h-[calc(100vh-40rem)] flex items-center justify-center">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400">
              {details.person.name.full_name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {details.person.designation}
            </p>
            <p className="text-gray-400 max-w-lg">
              {details.person.profile.bio}
            </p>
            <button
              className="border border-green-400/20 text-green-400 py-2 px-4 hover:bg-green-400/10 transition-colors"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              View Resume
            </button>
          </div>

          {/* Right side - Globe */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full max-w-[500px] aspect-square">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
