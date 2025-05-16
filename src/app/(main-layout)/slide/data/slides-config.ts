import { Slide } from "./schema";
import { aiForReactDevelopersSlides } from "./slides/01";
import { buildingRealtimeApplicationsWithReactiveDatabaseSlides } from "./slides/02";

export const slidesConfig: Record<string, Slide[]> = {
  "ai-for-react-developers": aiForReactDevelopersSlides,
  "building-realtime-applications-with-reactive-databases": buildingRealtimeApplicationsWithReactiveDatabaseSlides,
};
