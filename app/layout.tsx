import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beerdigungsinstitut Hans Blasius GmbH — Bestattungen in Saarlouis",
  description:
    "Würdevolle Bestattungen in Saarlouis. Beerdigungsinstitut Hans Blasius steht Ihnen im Trauerfall mit Mitgefühl, Erfahrung und persönlicher Betreuung zur Seite.",
  metadataBase: new URL("https://beerdigungsinstitut-hans-blasius.de"),
  openGraph: {
    title: "Beerdigungsinstitut Hans Blasius GmbH",
    description:
      "Ihre Unterstützung im Trauerfall. Persönlich, würdevoll, verlässlich — seit vielen Jahren in Saarlouis.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
