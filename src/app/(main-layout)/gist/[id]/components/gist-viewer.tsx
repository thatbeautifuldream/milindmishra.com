"use client";

import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { RestEndpointMethodTypes } from "@octokit/rest";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";

interface GistViewerProps {
  gist: RestEndpointMethodTypes["gists"]["get"]["response"]["data"];
}

export default function GistViewer({ gist }: GistViewerProps) {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  const handleCopy = async (content: string, filename: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <Link
            target="_blank"
            href={`https://gist.github.com/thatbeautifuldream/${gist.id}`}
            className={cn(
              "text-2xl sm:text-3xl font-bold mb-4 text-green-50 cursor-pointer",
              bricolageGrotesque.className
            )}
          >
            {gist.description || "Untitled Gist"}
          </Link>

          <div className="mb-6 flex flex-wrap gap-2">
            {Object.entries(gist.files || {}).map(([filename, file]) => (
              <span
                key={filename}
                className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
              >
                {filename}
                {file?.language && (
                  <span className="ml-2 text-xs px-2 py-1 bg-green-400/10">
                    {file.language}
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            {Object.entries(gist.files || {}).map(([filename, file]) => (
              <div
                key={filename}
                className="border border-green-400/20 overflow-hidden bg-black/50 backdrop-blur-sm"
              >
                <div className="border-b border-green-400/20 px-4 py-2 flex justify-between items-center">
                  <h2 className="text-green-300 font-medium">{filename}</h2>
                  <motion.button
                    onClick={() => handleCopy(file?.content || "", filename)}
                    className="text-green-300/70 hover:text-green-300 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedFile === filename ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
                <div className="p-4">
                  {file?.language?.toLowerCase().includes("markdown") ? (
                    <div className="prose prose-invert prose-green max-w-none">
                      <ReactMarkdown>{file.content || ""}</ReactMarkdown>
                    </div>
                  ) : (
                    <SyntaxHighlighter
                      language={file?.language?.toLowerCase()}
                      style={a11yDark}
                      customStyle={{
                        margin: 0,
                        background: "transparent",
                        fontSize: "14px",
                      }}
                      wrapLongLines={true}
                      showLineNumbers={false}
                    >
                      {file?.content || ""}
                    </SyntaxHighlighter>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-green-300/70">
            Updated: {new Date(gist.updated_at || "").toLocaleDateString()}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
