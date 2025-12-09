import Link from "next/link";
import { legalLinks } from "../lib/legal-links";

type MicroSaaSFooterProps = {
  productName?: string;
  tagline?: string;
};

const absoluteLegalLinks = legalLinks.map((link) => ({
  label: link.label,
  href: `https://mvphouse.app${link.href}`,
}));

const productNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const supportNav = [
  { label: "Email Support", href: "mailto:support@mvphouse.app" },
  { label: "Contact", href: "/contact" },
];

export const MicroSaaSFooter = ({
  productName = "Your Product™",
  tagline = "Part of the MVP HOUSE micro-SaaS ecosystem (UK).",
}: MicroSaaSFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="text-xl font-semibold">{productName}</div>
            <p className="text-sm text-white/70">{tagline}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterList title="Product" links={productNav} />
            <FooterList title="Support" links={supportNav} />
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Legal &amp; Compliance
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {absoluteLegalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Operated By
              </h4>
              <ul className="mt-4 space-y-1 text-sm text-white/70">
                <li>MVP HOUSE LTD</li>
                <li>71–75 Shelton Street</li>
                <li>Covent Garden</li>
                <li>London, WC2H 9JQ</li>
                <li>United Kingdom</li>
                <li className="pt-2">
                  <strong>Support:</strong>{" "}
                  <a href="mailto:support@mvphouse.app" className="hover:text-white">
                    support@mvphouse.app
                  </a>
                </li>
                <li className="text-xs text-white/60">Phone support provided for B2B customers only.</li>
                <li className="text-xs text-white/60">Governing law: England &amp; Wales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-sm text-white/70">
          © {currentYear} MVP HOUSE LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterList = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">{title}</h4>
    <ul className="mt-4 space-y-2 text-sm text-white/70">
      {links.map((link) => (
        <li key={link.label}>
          {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
            <a href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default MicroSaaSFooter;
