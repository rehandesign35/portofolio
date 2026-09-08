import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rehan — AI Engineer | Portfolio",
  description:
    "AI systems that catch the leads your business is already losing. Seven connected agents — voice, follow-up, pricing, compliance, and monitoring — built and stress-tested with real data.",
  openGraph: {
    title: "Rehan — AI Engineer | Portfolio",
    description:
      "AI systems that catch the leads your business is already losing. Seven connected agents built and stress-tested with real data.",
    type: "website",
    locale: "en_US",
    siteName: "Rehan — AI Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rehan — AI Engineer | Portfolio",
    description:
      "AI systems that catch the leads your business is already losing. Seven connected agents built and stress-tested with real data.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
