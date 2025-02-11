import ReactQueryProvider from "./react-query-provider";
import { Analytics } from "@vercel/analytics/react"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      {children}
      <Analytics />
    </ReactQueryProvider>
  );
}
