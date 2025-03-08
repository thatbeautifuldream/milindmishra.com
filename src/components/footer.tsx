import React from "react";
import Icons from "./icons";

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/thatbeautifuldream?ref=milindmishra.com",
    icon: Icons.Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mishramilind/?ref=milindmishra.com",
    icon: Icons.LinkedIn,
  },
  {
    name: "Email",
    href: "mailto:milind.mishra4@gmail.com",
    icon: Icons.Gmail,
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 border-t border-dashed border-green-600/50 select-none"
    >
      <div className="mx-auto max-w-6xl px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="size-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-400 hover:text-green-300 transition-colors md:order-1 md:mt-0">
          © {currentYear} Milind Mishra.
        </p>
      </div>
    </footer>
  );
}
