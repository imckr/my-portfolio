import { JetBrains_Mono, Inter } from "next/font/google";

export const Jet = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--jetbrains-mono",
  display: "swap",
});

export const Jet_bold = JetBrains_Mono({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
  variable: "--jetbrains-mono-bold",
  display: "swap",
});

export const inter_bold = Inter({ subsets: ["latin"], weight: "700", display: "swap" });
