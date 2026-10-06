import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faq" },
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
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "border-b border-slate-200 bg-white/92 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]" aria-label="Boost Solution Processing home">
          <img src="/brand-mark.svg" alt="" aria-hidden="true" className="h-9 w-9" />
          <span className="font-heading text-base font-bold tracking-[-0.04em] text-[#0a1c47] sm:text-lg">Boost Solution <span className="text-[#0b7564]">Processing</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-[#0b7564] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">{link.label}</a>
          ))}
          <a href="#contact" className="inline-flex min-h-10 items-center rounded-xl bg-[#ffd166] px-4 text-sm font-bold text-[#0a1c47] transition hover:-translate-y-0.5 hover:bg-[#ffc14e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">Get a quote</a>
        </div>

        <button type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0a1c47] transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564] md:hidden">
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }} className="border-t border-slate-200 bg-white px-5 pb-5 pt-2 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#0a1c47] transition hover:bg-[#eef4ff] hover:text-[#0b7564]">{link.label}</a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0b7564] px-4 text-sm font-bold text-white transition hover:bg-[#075b4d]">Get a custom quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
