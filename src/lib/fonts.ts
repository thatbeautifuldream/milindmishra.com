import { DM_Sans, Instrument_Serif } from "next/font/google";

export const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
