import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./about/Navbar";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getviid.com"),
  title: "G.E.T.V.I.I.D. – Guiding Everyone To Victory In Intimate Integrity & Dignity",
  description:
    "G.E.T.V.I.I.D. empowers individuals to achieve victory in intimate integrity and dignity. Explore resources, guidance, and a supportive community for personal growth, healthy relationships, and holistic well-being.",
  keywords: [
    "intimate integrity",
    "dignity",
    "personal growth",
    "healthy relationships",
    "well-being",
    "guidance",
    "support",
    "G.E.T.V.I.I.D.",
    "victory",
    "self-improvement",
    "mental health",
    "community"
  ],
  openGraph: {
    title: "G.E.T.V.I.I.D. – Guiding Everyone To Victory In Intimate Integrity & Dignity",
    description:
      "Empowering everyone to achieve victory in intimate integrity and dignity. Join our community for resources and support.",
    url: "https://getviid.com",
    siteName: "G.E.T.V.I.I.D.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "G.E.T.V.I.I.D. – Guiding Everyone To Victory In Intimate Integrity & Dignity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G.E.T.V.I.I.D. – Guiding Everyone To Victory In Intimate Integrity & Dignity",
    description:
      "Empowering everyone to achieve victory in intimate integrity and dignity. Join our community for resources and support.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon example */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://getviid.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="Sakiasi Baleiwai Komaidrakulu" content="G.E.T.V.I.I.D. Creator" />
        <meta name="publisher" content="G.E.T.V.I.I.D." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme>
          <Navbar/>
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
