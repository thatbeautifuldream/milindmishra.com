/* eslint-disable @next/next/no-img-element */
"use client";

import { Deck } from "@/components/reveal/deck";
import { BaseHighlight } from "@/components/reveal/highlight";
import { Slide } from "@/components/reveal/slide";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "reveal.js/dist/reveal.css";
// TODO : handle theme from slides-config.ts using slideTheme
// import "reveal.js/dist/theme/black.css";
import "reveal.js/dist/theme/white.css";
// import "reveal.js/dist/theme/league.css";
// import "reveal.js/dist/theme/beige.css";
// import "reveal.js/dist/theme/night.css";
// import "reveal.js/dist/theme/serif.css";
// import "reveal.js/dist/theme/simple.css";
// import "reveal.js/dist/theme/solarized.css";
// import "reveal.js/dist/theme/moon.css";
// import "reveal.js/dist/theme/dracula.css";
// import "reveal.js/dist/theme/sky.css";
// import "reveal.js/dist/theme/blood.css";

import { Slide as SlideType } from "../data/slides-schema";
import { QRCode } from "@/components/qr-code";


/**
 * Props for the SlideContainer component
 */
interface SlideContainerProps {
  /** Array of slide data to be rendered */
  slides: SlideType[];
  /** Optional Reveal.js configuration options */
  config?: Reveal.Options;
}

/**
 * Renders the content of a single slide
 */
function SlideContent({ slide }: { slide: SlideType }) {
  return (
    <div className={cn(bricolageGrotesque.className)} >
      {slide.title && (
        <h2
          id={slide.titleId}
          data-id={slide.titleId}
          className={cn(slide.titleClassName)}
          style={{
            fontFamily: bricolageGrotesque.style.fontFamily,
          }}
        >
          {slide.title}
        </h2>
      )}

      {slide.image && (
        <div
          className="flex justify-center items-center"
          data-id={slide.imageId}
        >
          <img
            src={slide.image}
            alt={slide.title || ""}
            className="w-1/2 rounded-lg"
            data-id={slide.imageId}
          />
        </div>
      )}

      {slide.iframe && (
        <div
          className="flex justify-center items-center my-4"
          data-id={slide.iframeId}
        >
          <iframe
            src={slide.iframe}
            title={slide.title || "Embedded content"}
            className="w-full h-[500px] rounded-lg border-none"
            data-id={slide.iframeId}
            allowFullScreen
          />
        </div>
      )}

      {slide.qrCodeLink && (
        <div
          className="flex justify-center items-center"
          data-id={slide.qrCodeLink}
        >
          <div className="w-1/2 rounded-lg flex justify-center items-center">
            <QRCode data={slide.qrCodeLink} />
          </div>
        </div>
      )}

      {slide.content && (
        <p
          data-id={slide.contentId}
          className={slide.contentClassName}
        >
          {slide.content}
        </p>
      )}

      {slide.ul && (
        <ul>
          {slide.ul.map((item, idx) => (
            <li
              key={item}
              className={slide.ulItemClassName}
              data-id={`ul-item-${idx}`}
              data-fragment-index={slide.listItemsAutoReveal ? idx : undefined}
              data-fragment-class={slide.listItemsFragmentClass}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {slide.ol && (
        <ol>
          {slide.ol.map((item, idx) => (
            <li
              key={item}
              className={slide.olItemClassName}
              data-id={`ol-item-${idx}`}
              data-fragment-index={slide.listItemsAutoReveal ? idx : undefined}
              data-fragment-class={slide.listItemsFragmentClass}
            >
              {item}
            </li>
          ))}
        </ol>
      )}

      {slide.code && slide.codeLanguage && (
        <div
          className={`text-md ${slide.codeContainerClassName || ''}`}
          data-id={slide.codeId}
        >
          <BaseHighlight
            language={slide.codeLanguage}
            code={slide.code}
            showLineNumbers={slide.showLineNumbers}
            highlightLines={slide.highlightLines}
            maxLines={slide.maxLines}
            data-id={slide.codeId}
          />
        </div>
      )}

      {/* Custom fragment elements */}
      {slide.fragments?.map((fragment, idx) => (
        <div
          key={idx}
          className={`fragment ${fragment.animation}`}
          data-fragment-index={fragment.index}
          data-selector={fragment.selector}
        />
      ))}

      {slide.footer && (
        <p
          className={`text-sm ${slide.footerClassName || ''}`}
          data-id={slide.footerId}
        >
          {slide.footer}
        </p>
      )}
    </div>
  );
}

/**
 * SlideContainer component - Main presentation component
 * 
 * This component is responsible for rendering a complete Reveal.js presentation
 * based on the provided slide data. It automatically handles:
 * 
 * 1. Grouping slides into vertical stacks (when verticalGroup is specified)
 * 2. Rendering slide content including titles, images, lists, and code blocks
 * 3. Applying all Reveal.js-specific properties like transitions and backgrounds
 * 
 * The component uses the Deck and Slide components to create the proper Reveal.js
 * markup hierarchy of `.reveal > .slides > section`.
 * 
 * @example
 * // Basic usage
 * <SlideContainer 
 *   slides={slidesData} 
 *   config={{ transition: 'fade' }} 
 * />
 */
export function SlideContainer({ slides, config = {} }: SlideContainerProps) {
  // Group slides into sections for vertical stacking if needed
  const groupedSlides = slides.reduce<SlideType[][]>((acc, slide) => {
    if (slide.verticalGroup) {
      const lastGroup = acc[acc.length - 1];
      if (lastGroup && lastGroup[0].verticalGroup === slide.verticalGroup) {
        lastGroup.push(slide);
      } else {
        acc.push([slide]);
      }
    } else {
      acc.push([slide]);
    }
    return acc;
  }, []);

  return (
    <Deck options={config}>
      {groupedSlides.map((group, groupIndex) => {
        // For single slides, render directly
        if (group.length === 1) {
          const slide = group[0];
          return (
            <Slide
              key={groupIndex}
              transition={slide.transition}
              transitionSpeed={slide.transitionSpeed}
              autoAnimate={slide.autoAnimate}
              autoAnimateUnmatched={slide.autoAnimateUnmatched}
              backgroundTransition={slide.backgroundTransition}
              backgroundColor={slide.backgroundColor}
              backgroundImage={slide.backgroundImage}
              backgroundSize={slide.backgroundSize}
              backgroundPosition={slide.backgroundPosition}
              backgroundRepeat={slide.backgroundRepeat}
              backgroundOpacity={slide.backgroundOpacity}
              backgroundIframe={slide.backgroundIframe}
              backgroundInteractive={slide.backgroundInteractive}
              state={slide.state}
              notes={slide.notes}
              id={slide.id}
            >
              <SlideContent slide={slide} />
            </Slide>
          );
        }
        // For vertical slides, nest them
        else {
          return (
            <Slide key={groupIndex}>
              {group.map((slide, slideIndex) => (
                <Slide
                  key={slideIndex}
                  transition={slide.transition}
                  transitionSpeed={slide.transitionSpeed}
                  autoAnimate={slide.autoAnimate}
                  autoAnimateUnmatched={slide.autoAnimateUnmatched}
                  backgroundTransition={slide.backgroundTransition}
                  backgroundColor={slide.backgroundColor}
                  backgroundImage={slide.backgroundImage}
                  backgroundSize={slide.backgroundSize}
                  backgroundPosition={slide.backgroundPosition}
                  backgroundRepeat={slide.backgroundRepeat}
                  backgroundOpacity={slide.backgroundOpacity}
                  backgroundIframe={slide.backgroundIframe}
                  backgroundInteractive={slide.backgroundInteractive}
                  state={slide.state}
                  notes={slide.notes}
                  id={slide.id}
                >
                  <SlideContent slide={slide} />
                </Slide>
              ))}
            </Slide>
          );
        }
      })}
    </Deck>
  );
}
