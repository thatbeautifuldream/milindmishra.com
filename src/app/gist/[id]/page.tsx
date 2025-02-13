import githubService from "@/services/github/github.service";
import { notFound } from "next/navigation";
import GistViewer from "./components/gist-viewer";

export default async function GistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const gist = await githubService.fetchGistContent(id);

  if (!gist) {
    notFound();
  }

  return <GistViewer gist={gist} />;
}
