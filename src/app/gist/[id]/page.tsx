"use client";

import { useQuery } from "@tanstack/react-query";
import { Octokit } from "@octokit/rest";
import { Loader } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { use } from "react";

const fetchGistContent = async (gistId: string) => {
  const octokit = new Octokit();
  const response = await octokit.rest.gists.get({
    gist_id: gistId,
  });
  return response.data;
};

export default function GistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const {
    data: gist,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gist", resolvedParams.id],
    queryFn: () => fetchGistContent(resolvedParams.id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin w-5 h-5 -mt-16" />
      </div>
    );
  }

  if (error || !gist) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1
            className={cn(
              "text-2xl sm:text-3xl font-bold mb-4 text-green-50",
              bricolageGrotesque.className
            )}
          >
            {gist.description || "Untitled Gist"}
          </h1>

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
                <div className="border-b border-green-400/20 px-4 py-2">
                  <h2 className="text-green-300 font-medium">{filename}</h2>
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
