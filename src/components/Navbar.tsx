import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Why Boost", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "border-b border-[#e3eee9] bg-white/95 shadow-[0_4px_18px_rgba(10,28,71,.06)] backdrop-blur-xl" : "bg-white/80 backdrop-blur-sm"}`}>
      <a href="#main-content" className="sr-only left-4 top-3 z-[60] rounded-lg bg-ink px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed">
        Skip to content
      </a>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal" aria-label="Boost Solution Processing home">
          <img src="/brand-mark.svg" alt="" aria-hidden="true" className="h-9 w-9" />
          <span className="text-base font-bold tracking-[-0.03em] text-ink sm:text-lg">
            Boost Solution <span className="text-teal">Processing</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/65 transition hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center rounded-full bg-teal px-5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0a6356] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            Get a terminal
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal md:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[#e3eee9] bg-white px-5 pb-5 pt-2 shadow-lg md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-cloud hover:text-teal">
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-teal px-4 text-sm font-bold text-white transition hover:bg-[#0a6356]"
              >
                Get a terminal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
