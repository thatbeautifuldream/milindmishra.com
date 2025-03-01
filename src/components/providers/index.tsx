import ReactQueryProvider from "./react-query-provider";
import { Analytics } from "@vercel/analytics/react";
import ViewTransitionsProvider from "./view-transitions-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitionsProvider>
      <ReactQueryProvider>
        {children}
        <Analytics />
      </ReactQueryProvider>
    </ViewTransitionsProvider>
  );
}
