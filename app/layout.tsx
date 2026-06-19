import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shezuna.co.uk"),
  title: {
    default: "Shezuna | Logistics in Leeds",
    template: "%s | Shezuna",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "Shezuna delivers reliable, technology-backed logistics in Leeds, including express delivery, B2B logistics, and last-mile solutions.",
  keywords: [
    "Shezuna",
    "Logistics in Leeds",
    "Express delivery Leeds",
    "B2B logistics",
    "Last-mile delivery",
  ],
  openGraph: {
    title: "Shezuna: Smart Logistics. Proven Reliability.",
    description:
      "Data-backed delivery solutions for Leeds businesses. Fast dispatch, transparent operations, and dependable service.",
    url: "https://shezuna.co.uk",
    siteName: "Shezuna",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shezuna: Smart Logistics. Proven Reliability.",
    description:
      "Data-backed delivery solutions for Leeds businesses. Fast dispatch, transparent operations, and dependable service.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plusJakarta.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
