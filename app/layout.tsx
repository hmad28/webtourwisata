import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lombokjourney.example"),
  title: { default: "Lombok Journey | Local Lombok Tours", template: "%s | Lombok Journey" },
  description: "Discover private Lombok tours, island trips, trekking, waterfalls, and local experiences.",
  openGraph: { title: "Lombok Journey", description: "Plan a more personal Lombok adventure.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={manrope.variable}><Header /><main>{children}</main><Footer /><WhatsAppFloat /></body></html>;
}
