import React from "react";

const navigation: { name: string; href: URL }[] = [
  {
    name: "GitHub",
    href: new URL("https://github.com/thatbeautifuldream?ref=milindmishra.com"),
  },
  {
    name: "LinkedIn",
    href: new URL(
      "https://www.linkedin.com/in/mishramilind/?ref=milindmishra.com"
    ),
  },
  {
    name: "Email",
    href: new URL("mailto:milind.mishra4@gmail.com"),
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 border-t border-dashed border-green-600/50 select-none"
    >
      <div className="mx-auto max-w-6xl px-6 md:flex md:items-center md:justify-between lg:px-8 font-mono">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href.toString()}
              className="text-green-400 hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs">{item.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-green-400 hover:text-green-300 transition-colors md:order-1 md:mt-0">
          © {currentYear} Milind Mishra.
        </p>
      </div>
    </footer>
  );
}
