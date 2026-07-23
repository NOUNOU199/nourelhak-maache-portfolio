import type { Metadata } from "next";
import { headers } from "next/headers";
import { Azeret_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const azeret = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const siteUrl = `${protocol}://${host}`;
  const title = "Nourelhak Maache — Software Engineer & AI Builder";
  const description =
    "Portfolio of Nourelhak Maache, an ESI Algiers computer science student building full-stack products, AI agents, and automation.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: siteUrl,
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Nourelhak Maache — Software with intelligence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${azeret.variable}`}>
        {children}
      </body>
    </html>
  );
}
