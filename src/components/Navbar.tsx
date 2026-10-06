<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faq" },
=======
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#mission" },
  { label: "Services", href: "#merchant" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
>>>>>>> 953a9aac626f00faed664d54c596d2633d0fb46d
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 953a9aac626f00faed664d54c596d2633d0fb46d
  );
};

export default Navbar;
