/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import { Slide } from "../data/schema";

interface SlideContainerProps {
  slides: Slide[];
  config?: Partial<Reveal.Options>;
}

export function SlideContainer({ slides, config = {} }: SlideContainerProps) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      ...config,
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, [config]);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        {slides.map((slide, index) => (
          <section key={index}>
            {slide.title && <h2>{slide.title}</h2>}
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title || ""}
                className="w-1/2"
              />
            )}
            {slide.content && <p>{slide.content}</p>}
            {slide.footer && <p>{slide.footer}</p>}
            {slide.ul && (
              <ul>
                {slide.ul.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {slide.ol && (
              <ol>
                {slide.ol.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
            {slide.code && <code>{slide.code}</code>}
          </section>
        ))}
      </div>
    </div>
  );
}
