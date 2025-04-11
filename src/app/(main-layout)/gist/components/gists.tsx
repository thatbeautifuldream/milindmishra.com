"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RestEndpointMethodTypes } from "@octokit/rest";
import { motion } from "framer-motion";
import Link from "next/link";

type GistsData =
  RestEndpointMethodTypes["gists"]["listForUser"]["response"]["data"];

export default function Gists({ gists }: { gists: GistsData }) {
  return (
    <div className="space-y-4">
      {gists.map((gist, index) => (
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
  );
}
