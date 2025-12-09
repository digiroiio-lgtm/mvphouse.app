import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVP House | Micro-SaaS Gallery",
  description:
    "mvphouse.app is the curated gallery of micro-SaaS apps designed and shipped inside MVP House.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[rgba(0,0,0,0.9)] antialiased">
        {children}
      </body>
    </html>
  );
}
