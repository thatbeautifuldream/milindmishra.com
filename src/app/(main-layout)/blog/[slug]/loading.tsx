import { Loader } from "lucide-react";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader className="animate-spin w-5 h-5 -mt-16" />
    </div>
  );
} 