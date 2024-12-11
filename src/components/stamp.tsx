"use client";

import { useEffect, useState } from "react";

export default function Stamp() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(-3);
  }, []);

  return (
    <div className="p-4 flex items-center justify-center">
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 300 300"
          className="text-white font-mono fill-current"
        >
          {/* Outer circle */}
          <circle
            cx="150"
            cy="150"
            r="140"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
          />

          {/* Inner circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />

          {/* Text paths */}
          <path id="upperArc" d="M 60 150 A 90 90 0 0 1 240 150" fill="none" />
          <path id="lowerArc" d="M 60 150 A 90 90 0 0 0 240 150" fill="none" />

          {/* Text content */}
          <text className="text-lg font-bold uppercase" fill="currentColor">
            <textPath href="#upperArc" startOffset="50%" textAnchor="middle">
              Certified
            </textPath>
          </text>
          <text
            x="150"
            y="160"
            className="text-3xl font-black uppercase"
            textAnchor="middle"
            fill="currentColor"
          >
            React
          </text>
          <text className="text-lg font-bold uppercase" fill="currentColor">
            <textPath href="#lowerArc" startOffset="50%" textAnchor="middle">
              Professional
            </textPath>
          </text>

          {/* Stars */}
          <text
            x="150"
            y="100"
            textAnchor="middle"
            fill="currentColor"
            fontSize="20"
          >
            ★ ★ ★ ★ ★
          </text>
          <text
            x="150"
            y="200"
            textAnchor="middle"
            fill="currentColor"
            fontSize="20"
          >
            ★ ★ ★ ★ ★
          </text>
        </svg>
      </div>
    </div>
  );
}
