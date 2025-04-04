import { Highlight as PrismHighlight, Language, type RenderProps } from 'prism-react-renderer';
import React from 'react';

/**
 * Props for the BaseHighlight component
 */
interface BaseHighlightProps {
    /** The code to be highlighted */
    code?: string;
    /** The programming language of the code */
    language: Language;
    /** Whether to display line numbers */
    showLineNumbers?: boolean;
    /** Lines to highlight in format "1,4-7,10" */
    highlightLines?: string; // Format: "1,4-7,10"
    /** Optional data-id attribute for the pre element */
    'data-id'?: string;
}

/**
 * BaseHighlight component - Code syntax highlighting for slides
 * 
 * This component provides syntax highlighting for code blocks in slides using
 * prism-react-renderer. It supports highlighting specific lines and showing 
 * line numbers.
 * 
 * @example
 * // Basic usage
 * <BaseHighlight 
 *   code="const x = 10;" 
 *   language="javascript" 
 * />
 * 
 * @example
 * // With line numbers and highlighted lines
 * <BaseHighlight 
 *   code="function add(a, b) {\n  return a + b;\n}" 
 *   language="javascript"
 *   showLineNumbers={true}
 *   highlightLines="2"
 * />
 */
export const BaseHighlight: React.FC<BaseHighlightProps> = ({
    code = '',
    language,
    showLineNumbers,
    highlightLines,
    'data-id': dataId
}) => {
    // Parse highlightLines string to get an array of highlighted line numbers
    const highlightedLineNumbers = React.useMemo(() => {
        if (!highlightLines) return new Set<number>();

        const result = new Set<number>();
        const parts = highlightLines.split(',');

        parts.forEach(part => {
            if (part.includes('-')) {
                // Handle ranges like "4-7"
                const [start, end] = part.split('-').map(num => parseInt(num, 10));
                for (let i = start; i <= end; i++) {
                    result.add(i);
                }
            } else {
                // Handle single lines like "1"
                result.add(parseInt(part, 10));
            }
        });

        return result;
    }, [highlightLines]);

    return (
        <PrismHighlight
            code={code}
            language={language}
            theme={undefined}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }: RenderProps) => (
                <pre className={className} style={style} data-id={dataId}>
                    {tokens.map((line, lineIdx) => {
                        const lineNumber = lineIdx + 1;
                        const isHighlighted = highlightedLineNumbers.has(lineNumber);

                        return (
                            <div
                                key={`line-${lineIdx}`}
                                {...getLineProps({ line, key: lineIdx })}
                                className={`${isHighlighted ? 'bg-yellow-900/30' : ''}`}
                                data-highlighted={isHighlighted || undefined}
                            >
                                {showLineNumbers && (
                                    <span className="inline-block w-10 mr-4 text-right text-gray-500 select-none">
                                        {lineNumber}
                                    </span>
                                )}

                                {line.map((token, tokenIdx) => (
                                    <span key={`token-${lineIdx}-${tokenIdx}`} {...getTokenProps({ token, key: tokenIdx })} />
                                ))}
                            </div>
                        );
                    })}
                </pre>
            )}
        </PrismHighlight>
    );
};
