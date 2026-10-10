import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { InteractionTracker } from "@/src/components/analytics/interaction-tracker";
import { SiteFooter } from "@/src/components/sections/site-footer";
import { SiteHeader } from "@/src/components/sections/site-header";
import { pageMetadata, pages } from "@/src/lib/seo";
import { site } from "@/src/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("shezuna-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...pageMetadata(pages.home),
    metadataBase: new URL(site.url),
    title: {
      default: pages.home.title,
      template: "%s | Shezuna",
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-electric focus:px-4 focus:py-2 focus:text-on-electric"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" className="flex-1">
          {children}
        </div>
        <SiteFooter />
        <Toaster richColors position="top-right" />
        <Analytics />
        <InteractionTracker />
      </body>
    </html>
  );
}
