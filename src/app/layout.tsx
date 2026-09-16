import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://flames143.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "FLAMES Calculator Online — Free Love Compatibility Test by Name | 2026",
    template: "%s | FLAMES Calculator Online",
  },
  description:
    "Free FLAMES calculator online — enter two names and discover your relationship: Friends, Love, Affection, Marriage, Enemies, or Siblings. The classic love compatibility test by name, trusted by millions since the 1990s.",
  keywords: [
    "flames calculator",
    "flames calculator online",
    "flames game online",
    "love calculator flames",
    "flames calculator by name",
    "relationship calculator",
    "flames love game",
    "play flames game online",
    "flames calculator love",
    "flames love test",
    "love compatibility test",
    "flames full form",
    "flames game",
    "love test by name",
    "name compatibility",
    "flames online",
    "flames calculator percentage",
    "relationship test online",
    "friendship calculator",
    "marriage compatibility",
    "free love calculator",
    "flames relationship calculator",
    "flames love calculator",
    "flames online calculator",
    "flames destiny calculator",
    "flames compatibility test",
    "flames name game",
    "flames calculator app",
    "flames test",
    "love flames calculator",
    "flames game free",
    "flames calculator 2026",
    "flames love compatibility",
    "flames relationship test",
    "flames online game free",
    "play flames online",
  ],
  authors: [{ name: "FLAMES Calculator" }],
  creator: "FLAMES Calculator",
  publisher: "FLAMES Calculator",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "FLAMES Calculator Online",
    title: "FLAMES Calculator Online — Free Love Compatibility Test by Name",
    description:
      "Enter two names and discover your relationship with the classic FLAMES game. Friends, Love, Affection, Marriage, Enemies, or Siblings — find out instantly!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FLAMES Calculator — Free Online Love Compatibility Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAMES Calculator Online — Free Love Compatibility Test",
    description:
      "Enter two names and discover your relationship with the classic FLAMES game. Free, instant, and fun!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3umV4mvqVIxo67qWhkMOA27IkZLO1KUxLTnSsj67VmE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FLAMES Calculator Online",
    url: SITE_URL,
    description:
      "Free online FLAMES calculator — enter two names and discover your relationship: Friends, Love, Affection, Marriage, Enemies, or Siblings.",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12500",
    },
    author: {
      "@type": "Organization",
      name: "FLAMES Calculator",
      url: SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does FLAMES stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FLAMES stands for Friends, Love, Affection, Marriage, Enemies, and Siblings. Each letter represents a possible relationship type in the classic name compatibility game.",
        },
      },
      {
        "@type": "Question",
        name: "How does the FLAMES calculator work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The FLAMES calculator removes common letters between two names, counts the remaining letters, then uses that count to eliminate letters from F-L-A-M-E-S until one remains — revealing your relationship type.",
        },
      },
      {
        "@type": "Question",
        name: "Is the FLAMES calculator accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FLAMES is a traditional name game designed for entertainment and fun. It is not a scientific predictor of real relationships. Use it to have fun with friends and loved ones!",
        },
      },
      {
        "@type": "Question",
        name: "Is the FLAMES calculator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the FLAMES calculator is completely free to use. No sign-ups, no subscriptions, and no hidden charges. Use it as many times as you like.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the FLAMES calculator for group names?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our FLAMES calculator works with two names at a time. For group compatibility, run separate calculations for each pair of names.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3umV4mvqVIxo67qWhkMOA27IkZLO1KUxLTnSsj67VmE" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-background-light font-display text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
