"use client";

import Link from "next/link";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-green-400/20">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            <span className="hidden sm:inline">Milind Mishra</span>
            <span className="sm:hidden">Milind</span>
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-green-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-green-300 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-green-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
