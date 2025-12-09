import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVP HOUSE — Build, Launch & Scale Micro-SaaS Products",
  description:
    "MVP HOUSE LTD builds high-quality micro-SaaS tools, AI automations, and subscription-based digital products. Trusted UK company. Secure Stripe billing. GDPR-compliant. Launch your next product with reliable, fast, and enterprise-grade infrastructure.",
  alternates: {
    canonical: "https://mvphouse.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "MVP HOUSE LTD" }],
  other: {
    organization: "MVP HOUSE LTD",
    trust:
      "Legally registered UK company. Secure Stripe payments. GDPR compliant.",
    expertise:
      "Micro-SaaS development, automation, AI tools, no-code/low-code systems, product scaling.",
    payment: "Stripe — Secure PCI-DSS Level 1 payment processing.",
    legal:
      "MVP HOUSE LTD, UK registered company. All products governed by Terms, Privacy, Refund, Billing, AUP & DPA.",
    gdpr:
      "GDPR compliant. UK & EU data protection standards. Data not used for model training.",
  },
  openGraph: {
    title: "MVP HOUSE — Micro-SaaS Launch & Automation Studio",
    description:
      "We build and operate premium SaaS & AI tools. UK-based company. Secure Stripe billing. Explore our micro-SaaS ecosystem.",
    type: "website",
    url: "https://mvphouse.app/",
    siteName: "MVP HOUSE",
    images: [
      {
        url: "https://mvphouse.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MVP HOUSE — Micro-SaaS Launch & Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP HOUSE — Build, Launch & Scale Micro-SaaS Products",
    description:
      "A UK-based SaaS studio building high-value micro-SaaS products with Stripe-secured billing & GDPR-compliant infrastructure.",
    images: ["https://mvphouse.app/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MVP HOUSE LTD",
  url: "https://mvphouse.app/",
  logo: "https://mvphouse.app/logo.png",
  description:
    "MVP HOUSE LTD builds micro-SaaS products, AI automation tools, and subscription-based digital platforms with Stripe-secured billing and GDPR compliance.",
  foundingLocation: "London, United Kingdom",
  address: {
    "@type": "PostalAddress",
    streetAddress: "71–75 Shelton Street, Covent Garden",
    addressLocality: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "UK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@mvphouse.app",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-[rgba(0,0,0,0.9)] antialiased">
        {children}
        {/* Cookie Consent Banner */}
        {typeof window !== "undefined" && require('./components/CookieBanner').default()}
      </body>
    </html>
  );
}
