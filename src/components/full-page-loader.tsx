import { Loader } from "lucide-react";
import React from "react";

function FullPageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader className="animate-spin w-5 h-5 -mt-16" />
    </div>
  );
}

export default FullPageLoader;
