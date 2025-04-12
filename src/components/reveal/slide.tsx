import React from 'react';

/**
 * Slide component - Represents a single slide in a Reveal.js presentation
 * 
 * This component wraps the Reveal.js section element that represents a slide.
 * The presentation markup hierarchy in Reveal.js requires `.reveal > .slides > section`
 * where each section element represents one slide.
 * 
 * When multiple Slide components are placed inside another Slide, they will be shown
 * as vertical slides. The first of the vertical slides is the "root" of the others
 * and will be included in the horizontal sequence.
 * 
 * @example
 * // Basic slide
 * <Slide>Content</Slide>
 * 
 * @example
 * // Slide with transition effect
 * <Slide transition="fade">Content with fade transition</Slide>
 * 
 * @example
 * // Slide with background
 * <Slide backgroundColor="#ff0000">Red background slide</Slide>
 * 
 * @example
 * // Slide with iframe background
 * <Slide backgroundIframe="https://example.com" backgroundInteractive>
 *   Content with interactive iframe background
 * </Slide>
 */
interface SlideProps {
    /** Content of the slide */
    children: React.ReactNode;
    /** Transition effect when navigating to this slide */
    transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
    /** Speed of the transition effect */
    transitionSpeed?: 'default' | 'fast' | 'slow';
    /** Enable auto-animation between this slide and the next */
    autoAnimate?: boolean;
    /** Whether to animate unmatched elements in auto-animate */
    autoAnimateUnmatched?: boolean;
    /** Transition effect for slide background */
    backgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
    /** Background color of the slide */
    backgroundColor?: string;
    /** URL of background image */
    backgroundImage?: string;
    /** Background size (CSS background-size property) */
    backgroundSize?: string;
    /** Background position (CSS background-position property) */
    backgroundPosition?: string;
    /** Background repeat (CSS background-repeat property) */
    backgroundRepeat?: string;
    /** Opacity of the background (0-1) */
    backgroundOpacity?: number;
    /** URL for an iframe to use as a background */
    backgroundIframe?: string;
    /** Whether the background iframe should be interactive */
    backgroundInteractive?: boolean;
    /**
     * Custom state applied to the viewport when this slide is active
     * 
     * The state value will be applied as a class on the viewport element,
     * allowing for broad style changes based on the active slide.
     * 
     * @example
     * <Slide state="make-it-pop">This will apply "make-it-pop" class to viewport</Slide>
     */
    state?: string;
    /** Speaker notes for this slide */
    notes?: string;
    /** Unique identifier for the slide */
    id?: string;
}

export function Slide({
    children,
    transition,
    transitionSpeed,
    autoAnimate,
    autoAnimateUnmatched,
    backgroundTransition,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    backgroundOpacity,
    backgroundIframe,
    backgroundInteractive,
    state,
    notes,
    id,
}: SlideProps) {
    // Build background style for inline backgrounds
    const backgroundStyle: React.CSSProperties = {};
    if (backgroundColor) backgroundStyle.backgroundColor = backgroundColor;
    if (backgroundImage) backgroundStyle.backgroundImage = `url(${backgroundImage})`;
    if (backgroundSize) backgroundStyle.backgroundSize = backgroundSize;
    if (backgroundPosition) backgroundStyle.backgroundPosition = backgroundPosition;
    if (backgroundRepeat) backgroundStyle.backgroundRepeat = backgroundRepeat;
    if (backgroundOpacity !== undefined) backgroundStyle.opacity = backgroundOpacity;

    const hasBackgroundStyle = Object.keys(backgroundStyle).length > 0;

    return (
        <section
            id={id}
            data-transition={transition}
            data-transition-speed={transitionSpeed}
            data-auto-animate={autoAnimate !== undefined ? autoAnimate : undefined}
            data-auto-animate-unmatched={autoAnimateUnmatched !== undefined ? autoAnimateUnmatched : undefined}
            data-background-transition={backgroundTransition}
            data-background-iframe={backgroundIframe}
            data-background-interactive={backgroundInteractive !== undefined ? backgroundInteractive : undefined}
            data-state={state}
            data-notes={notes}
            style={hasBackgroundStyle ? backgroundStyle : undefined}
            data-background-color={!hasBackgroundStyle && backgroundColor ? backgroundColor : undefined}
            data-background-image={!hasBackgroundStyle && backgroundImage ? `url(${backgroundImage})` : undefined}
            data-background-size={!hasBackgroundStyle && backgroundSize ? backgroundSize : undefined}
            data-background-position={!hasBackgroundStyle && backgroundPosition ? backgroundPosition : undefined}
            data-background-repeat={!hasBackgroundStyle && backgroundRepeat ? backgroundRepeat : undefined}
            data-background-opacity={!hasBackgroundStyle && backgroundOpacity !== undefined ? backgroundOpacity : undefined}
        >
            {children}
        </section>
    );
}
