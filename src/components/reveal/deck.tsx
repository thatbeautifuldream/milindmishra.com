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
    const optionsRef = useRef<Reveal.Options>(options);

    useEffect(() => {
        if (!deckRef.current) return;

        // Merge default options with provided options
        const mergedOptions = {
            ...revealOptions,
            ...options,
            plugins: [
                ...(options.plugins || [])
            ]
        };

        // Store the current options for comparison
        const prevOptions = optionsRef.current;
        optionsRef.current = options;

        // Initialize or reinitialize Reveal.js when options change
        if (!revealRef.current || JSON.stringify(prevOptions) !== JSON.stringify(options)) {
            // If already initialized, we need to destroy the previous instance
            if (revealRef.current) {
                // Reveal.js doesn't have a proper destroy method, so we'll try to clean up
                // by removing event listeners and resetting the DOM
                const deck = deckRef.current;
                if (deck) {
                    // Remove any event listeners that might have been added
                    const newDeck = deck.cloneNode(true);
                    if (deck.parentNode) {
                        deck.parentNode.replaceChild(newDeck, deck);
                    }
                }
            }

            // Initialize a new Reveal.js instance
            revealRef.current = new Reveal(deckRef.current, mergedOptions);
            revealRef.current.initialize(mergedOptions);
        }

        // Clean up
        return () => {
            // No proper cleanup needed as we handle it above
        };
    }, [options]);

    return (
        <div className="reveal" ref={deckRef}>
            <div className="slides">{children}</div>
        </div>
    );
}
