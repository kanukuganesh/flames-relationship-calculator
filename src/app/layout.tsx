import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLAMES — Relationship Calculator",
  description:
    "Discover your relationship compatibility with the classic FLAMES game. Enter two names and let the magic reveal your destiny!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light font-display text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
