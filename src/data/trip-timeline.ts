import Icons from "@/components/icons";

export interface TripEntry {
  period: {
    start: number;
    end: number | null;
  };
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  images?: string[];
}

export const tripTimeline: TripEntry[] = [
  {
    period: {
      start: 1713561600, // Feb 2025
      end: null,
    },
    name: "Beach Escape to Goa",
    description: "Beach Escape to Goa",
    icon: Icons.Nextjs,
    tags: ["Goa", "Beach", "Sunset", "Adventure"],
    images: ["/images/trip/1.jpg", "/images/trip/2.jpg", "/images/trip/3.jpg"],
  },
];
