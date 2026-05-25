import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/misc/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "https://tedxpanteionuniversity.com";

const siteName = "TEDxPanteion University";
const eventName = "Sensorium";
const fullTitle = `${eventName} - ${siteName} 2026`;
const siteDescription =
  "TEDxPanteion University 2026 presents Sensorium, an event exploring perception, the senses, technology, society, science, and culture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: fullTitle,
    template: `%s - ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    siteName,
    "TEDxPU",
    "TEDx",
    "Panteion University",
    eventName,
    "TEDx 2026",
    "Athens events",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: fullTitle,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/assets/events/2026.avif",
        width: 2500,
        height: 1309,
        alt: `${eventName} ${siteName} 2026`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: siteDescription,
    images: ["/assets/events/2026.avif"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
