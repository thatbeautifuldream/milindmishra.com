import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import { revealOptions } from './reveal-options';
import 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/plugin/notes/notes.js';
import 'reveal.js/plugin/zoom/zoom.js';
import 'reveal.js/plugin/math/math.js';

/**
 * Deck component - The main container for a Reveal.js presentation
 * 
 * This component serves as the root wrapper for a Reveal.js presentation.
 * It initializes Reveal.js with the provided options and renders the slides
 * within the required markup hierarchy: `.reveal > .slides > section`.
 * 
 * The Deck component automatically handles the initialization and cleanup
 * of the Reveal.js instance, as well as syncing when options change.
 * 
 * @example
 * // Basic usage
 * <Deck options={{ transition: 'slide' }}>
 *   <Slide>Slide 1</Slide>
 *   <Slide>Slide 2</Slide>
 * </Deck>
 * 
 * @example
 * // With nested vertical slides
 * <Deck options={{ transition: 'fade' }}>
 *   <Slide>Horizontal Slide</Slide>
 *   <Slide>
 *     <Slide>Vertical Slide 1</Slide>
 *     <Slide>Vertical Slide 2</Slide>
 *   </Slide>
 * </Deck>
 */
export function Deck({ options, children }: { options: Reveal.Options, children: React.ReactNode }) {
    const revealRef = useRef<Reveal.Api | null>(null);
    const deckRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (deckRef.current) {
            // Initialize Reveal.js only once
            if (!revealRef.current) {
                // Merge default options with provided options
                const mergedOptions = {
                    ...revealOptions,
                    ...options,
                    plugins: [
                        // // @ts-expect-error - RevealHighlight is a valid plugin
                        // RevealHighlight,
                        // // @ts-expect-error - RevealNotes is a valid plugin
                        // RevealNotes,
                        // // @ts-expect-error - RevealZoom is a valid plugin
                        // RevealZoom,
                        // // @ts-expect-error - RevealMath is a valid plugin
                        // RevealMath.KaTeX,
                        ...(options.plugins || [])
                    ]
                };

                // Initialize Reveal.js
                revealRef.current = new Reveal(deckRef.current, mergedOptions);
                revealRef.current.initialize(mergedOptions);
            } else {
                // If already initialized, just sync the state
                revealRef.current.sync();
            }
        }

        // Clean up
        return () => {
            if (revealRef.current) {
                // No built-in destroy method, so we just leave it
            }
        };
    }, [options]);

    return (
        <div className="reveal" ref={deckRef}>
            <div className="slides">{children}</div>
        </div>
    );
}
