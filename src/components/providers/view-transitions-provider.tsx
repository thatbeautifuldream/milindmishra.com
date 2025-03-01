import { ViewTransitions } from "next-view-transitions";

export default function ViewTransitionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
