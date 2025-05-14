import { z } from "zod";

/**
 * Slide Schema - Defines the structure of a slide in a Reveal.js presentation
 *
 * This schema defines all properties that can be applied to a slide including:
 * - Content elements (title, text, lists, code, images)
 * - Reveal.js-specific properties (transitions, animations, backgrounds)
 * - Styling and identification properties (IDs, class names)
 * - Slide organization (vertical grouping)
 *
 * The schema is used to validate slide data and provide type safety throughout
 * the application.
 */
export const slideSchema = z.object({
  /** Main slide title */
  title: z.string().optional(),
  /** Main content text */
  content: z.string().optional(),
  /** Footer text (usually smaller at bottom of slide) */
  footer: z.string().optional(),
  /** URL of an image to display */
  image: z.string().optional(),
  /** URL for an iframe to embed */
  iframe: z.string().optional(),
  /** URL for an iframe to use as a background */
  backgroundIframe: z.string().optional(),
  /** Whether the background iframe should be interactive */
  backgroundInteractive: z.boolean().optional(),
  /** Unordered list items */
  ul: z.array(z.string()).optional(),
  /** Ordered list items */
  ol: z.array(z.string()).optional(),
  /** Code to display with syntax highlighting */
  code: z.string().optional(),
  /** Programming language for syntax highlighting */
  codeLanguage: z.enum(["tsx", "jsx", "json", "bash"]).optional(),

  // Animation and transition properties
  /**
   * Transition effect when navigating to this slide
   * @see {@link https://revealjs.com/transitions/}
   */
  transition: z
    .enum(["none", "fade", "slide", "convex", "concave", "zoom"])
    .optional(),
  /** Speed of the transition effect */
  transitionSpeed: z.enum(["default", "fast", "slow"]).optional(),
  /**
   * Enable auto-animation between this slide and the next
   * @see {@link https://revealjs.com/auto-animate/}
   */
  autoAnimate: z.boolean().optional(),
  /** Whether to animate unmatched elements in auto-animate */
  autoAnimateUnmatched: z.boolean().optional(),
  /** Transition effect for slide background */
  backgroundTransition: z
    .enum(["none", "fade", "slide", "convex", "concave", "zoom"])
    .optional(),

  // Background properties
  /**
   * Background color of the slide
   * @see {@link https://revealjs.com/backgrounds/}
   */
  backgroundColor: z.string().optional(),
  /** URL of background image */
  backgroundImage: z.string().optional(),
  /** Background size (CSS background-size property) */
  backgroundSize: z.string().optional(),
  /** Background position (CSS background-position property) */
  backgroundPosition: z.string().optional(),
  /** Background repeat (CSS background-repeat property) */
  backgroundRepeat: z.string().optional(),
  /** Opacity of the background (0-1) */
  backgroundOpacity: z.number().optional(),

  // Element IDs and classes for styling and auto-animate
  /** Unique identifier for the slide */
  id: z.string().optional(),
  /** ID for the title element (useful for auto-animate) */
  titleId: z.string().optional(),
  /** ID for the content element */
  contentId: z.string().optional(),
  /** ID for the image element */
  imageId: z.string().optional(),
  /** ID for the iframe element */
  iframeId: z.string().optional(),
  /** ID for the footer element */
  footerId: z.string().optional(),
  /** ID for the code block element */
  codeId: z.string().optional(),
  /** CSS class name for the title */
  titleClassName: z.string().optional(),
  /** CSS class name for the content */
  contentClassName: z.string().optional(),
  /** CSS class name for the footer */
  footerClassName: z.string().optional(),
  /** CSS class name for the code container */
  codeContainerClassName: z.string().optional(),
  /** CSS class name for unordered list items */
  ulItemClassName: z.string().optional(),
  /** CSS class name for ordered list items */
  olItemClassName: z.string().optional(),

  // Code highlight features
  /** Whether to display line numbers in code blocks */
  showLineNumbers: z.boolean().optional(),
  /** Lines to highlight in format "1,4-7,10" */
  highlightLines: z.string().optional(), // Format: "1,4-7,10"
  /** Maximum number of lines to display in code blocks (will add scrolling) */
  maxLines: z.number().optional(),

  // Fragment animations and behavior
  /**
   * Fragment animations for elements within the slide
   * @see {@link https://revealjs.com/fragments/}
   */
  fragments: z
    .array(
      z.object({
        /** CSS selector for the element to animate */
        selector: z.string(),
        /** Type of fragment animation */
        animation: z.enum([
          "fade-in",
          "fade-out",
          "fade-up",
          "fade-down",
          "fade-left",
          "fade-right",
          "fade-in-then-out",
          "fade-in-then-semi-out",
          "grow",
          "shrink",
          "strike",
          "highlight-red",
          "highlight-blue",
          "highlight-green",
        ]),
        /** Order index for the fragment animation */
        index: z.number().optional(),
      })
    )
    .optional(),

  /** Automatically reveal list items one by one */
  listItemsAutoReveal: z.boolean().optional(),
  /** CSS class to apply to list items when revealed */
  listItemsFragmentClass: z.string().optional(),

  /**
   * Group ID for vertical slides
   * Slides with the same verticalGroup value will be stacked vertically
   * @see {@link https://revealjs.com/vertical-slides/}
   */
  verticalGroup: z.string().optional(),

  /**
   * Speaker notes for this slide
   * @see {@link https://revealjs.com/speaker-view/}
   */
  notes: z.string().optional(),

  /**
   * Custom state applied to the viewport when this slide is active
   * @see {@link https://revealjs.com/slide-states/}
   */
  state: z.string().optional(),
});

/**
 * Slide type - Represents a slide in a Reveal.js presentation
 *
 * This type is inferred from the slideSchema and used throughout
 * the application to ensure type safety when working with slides.
 */
export type Slide = z.infer<typeof slideSchema>;
