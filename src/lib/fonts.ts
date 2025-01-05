import { Space_Grotesk, Instrument_Serif } from "next/font/google";

export const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
