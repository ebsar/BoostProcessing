import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#mission" },
  { label: "Services", href: "#merchant" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/60 backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-white/10 shadow-2xl"
          : "py-8 bg-black/10 backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="relative z-[101] flex items-center overflow-visible transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Boost Solution Processing LLC"
        >
          <img
            src="/brand-wordmark.svg"
            alt="Boost Solution Processing LLC"
            className="h-10 w-auto max-w-[calc(100vw-6.5rem)] object-contain drop-shadow-[0_0_14px_rgba(209,255,189,0.12)] sm:h-10 sm:max-w-[260px] md:h-11 md:max-w-[320px] lg:h-12 lg:max-w-[360px] xl:h-[3.35rem] xl:max-w-[400px]"
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 hover:text-[#D1FFBD] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D1FFBD] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden relative z-[101] p-2 text-white transition-colors hover:text-[#D1FFBD]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-[30px] z-[100] flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-3xl font-black tracking-tighter text-white hover:text-[#D1FFBD] transition-colors uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
