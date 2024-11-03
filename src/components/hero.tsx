import { details } from "@/data/resume";
import { ResumeModal } from "./resume-modal";
import { useState } from "react";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="h-[calc(100vh-40rem)] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400">
              {details.person.name.full_name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {details.person.designation}
            </p>
            <p className="text-gray-400">{details.person.profile.bio}</p>
            <button
              className="border border-green-400/20 text-green-400 py-2 px-4 hover:bg-green-400/10 transition-colors"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
