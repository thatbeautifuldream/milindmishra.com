"use client";

const links = {
  projects: [
    { url: "https://milindmishra.com", title: "milindmishra.com" },
    { url: "https://airoadmapgenerator.com", title: "airoadmapgenerator.com" },
    {
      url: "https://sideprojects.directory",
      title: "analytics-code.vercel.app",
    },
    { url: "https://jsonvisualiser.com", title: "jsonvisualiser.com" },
  ],
  npm: [
    {
      url: "https://www.npmjs.com/package/todo-fixme-scanner",
      title: "todo-fixme-scanner",
    },
  ],
  github: [
    {
      url: "https://github.com/thatbeautifuldream",
      title: "github.com/thatbeautifuldream",
    },
  ],
  contact: [
    { url: "mailto:milindmishra4@gmail.com", title: "milindmishra4@gmail.com" },
    {
      url: "https://linkedin.com/in/mishramilind",
      title: "linkedin.com/in/mishramilind",
    },
  ],
};

export default function ClientPitchPage() {
  return (
    <div className="font-mono px-6 py-16 lg:px-8 bg-black text-green-400">
      <div className="mx-auto max-w-3xl">
        <pre className="whitespace-pre-wrap">
          {`Product Engineer
=================

Hi, I'm Milind Mishra
---------------------

Product Engineer with a proven track record of building
successful products from concept to launch. Specializing in modern web
technologies and cloud infrastructure.

With international experience across India, Taiwan, and the US, I bring a 
global perspective to software development.

Core Skills:
-----------
* Product Leadership     - Led development of multiple successful products
* Technical Expertise   - Deep experience in React, TypeScript, Cloud
* Full-Stack Dev       - End-to-end product development capabilities

Tech Stack:
----------
TypeScript | React | Next.js | AWS | DevOps

Projects / Freelance Work:
------------------------`}
        </pre>
        <div className="mt-4 space-y-2 text-green-400/80">
          {links.projects.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block hover:text-green-300"
            >
              → {link.title}
            </a>
          ))}
        </div>
        <pre className="mt-8 whitespace-pre-wrap">
          {`
NPM Package:
-----------`}
        </pre>
        <div className="mt-2">
          {links.npm.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block hover:text-green-300"
            >
              → {link.title}
            </a>
          ))}
        </div>
        <pre className="mt-8 whitespace-pre-wrap">
          {`
GitHub:
-------`}
        </pre>
        <div className="mt-2">
          {links.github.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block hover:text-green-300"
            >
              → {link.title}
            </a>
          ))}
        </div>
        <pre className="mt-8 whitespace-pre-wrap">
          {`
Contact:
--------`}
        </pre>
        <div className="mt-2">
          {links.contact.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block hover:text-green-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
