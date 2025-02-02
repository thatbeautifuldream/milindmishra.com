"use client";

import { useQuery } from "@tanstack/react-query";
import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type GistsData =
  RestEndpointMethodTypes["gists"]["listForUser"]["response"]["data"];

const fetchGists = async (): Promise<GistsData> => {
  const octokit = new Octokit();
  const response = await octokit.rest.gists.listForUser({
    username: "thatbeautifuldream",
    per_page: 100,
  });
  return response.data;
};

export function Gists() {
  const {
    data: gists,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gists"],
    queryFn: fetchGists,
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-4">
        <div className="text-red-500">
          Error loading gists. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-4">
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        My Gists
      </h2>
      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {gists?.map((gist, index) => (
            <motion.div
              key={gist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link href={`/gist/${gist.id}`}>
                <Card className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-green-50">
                      {gist.description || "Untitled Gist"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(gist.files).map(([filename, file]) => (
                        <div key={filename} className="text-sm text-green-300">
                          <span className="font-medium">{filename}</span>
                          {file.language && (
                            <span className="ml-2 text-xs px-2 py-1 bg-green-400/10 text-green-300">
                              {file.language}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-green-300/70">
                      Updated: {new Date(gist.updated_at).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
