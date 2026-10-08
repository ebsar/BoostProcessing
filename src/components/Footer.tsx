const footerLinks = [
  { label: "Why Boost", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "/privacy-policy.html", external: true },
];

const Footer = () => (
  <footer className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <img src="/brand-mark.svg" alt="" aria-hidden="true" className="h-9 w-9" />
          <p className="text-lg font-bold tracking-[-0.03em]">
            Boost Solution <span className="text-mint-light">Processing</span>
          </p>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">We find, install, and support payment terminals for growing businesses.</p>
      </div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/68">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="transition hover:text-mint-light">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
    <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-xs text-white/45">
      © {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
    </div>
  </footer>
);

export default Footer;
