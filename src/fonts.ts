import { Source_Serif_4, Open_Sans } from "next/font/google";

export const sourceSerif = Source_Serif_4({
  weight: ["400", "700"],
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
});
