import React from "react";

function SlideLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-screen">{children}</div>;
}

export default SlideLayout;
