import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MODAF — Build SaaS faster with AI agents",
  description:
    "A reusable framework that helps coding agents like Claude Code architect and build SaaS products with precision. Clone, describe your idea, and let MODAF handle the rest.",
  openGraph: {
    title: "MODAF — Build SaaS faster with AI agents",
    description:
      "A reusable framework that helps coding agents like Claude Code architect and build SaaS products with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
