import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import missionImg from "@/assets/mission-img.jpg";
import merchantImg from "@/assets/merchant-img.jpg";
import terminalImg from "@/assets/terminal-img.jpg";
import posImg from "@/assets/pos-img.jpg";

const LoadingScreen = () => {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505]"
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-64 h-64 bg-[#D1FFBD]/10 blur-[80px] rounded-full"
      />
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-heading text-2xl font-black tracking-tighter mb-4 text-center"
        >
          <span className="text-white">BOOST <span className="text-[#D1FFBD]"> SOLUTION</span></span>
          <span className="text-white"> PROCESSING </span>
        </motion.div>
        <div className="w-40 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[#D1FFBD]"
          />
        </div>
      </div>
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const liquidTextClass = "bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent transform-gpu";

const AnimatedLetters = ({ text, className, trigger }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.span variants={sentence} initial="hidden" animate={trigger ? "visible" : "hidden"} className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block origin-bottom text-white">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const services = [
  {
    title: "MERCHANT PROCESSING",
    subtitle: "WE CAN CHANGE THE WAY YOU GET PAID",
    description: "Delivering secure, reliable, and high-value credit card processing services that you can trust. Our commitment to safety ensures your transactions are handled with utmost dependability, giving you peace of mind and exceptional value.",
    image: merchantImg,
    alt: "Merchant processing payment",
  },
  {
    title: "TERMINAL EQUIPMENT",
    subtitle: "THE BEST EQUIPMENT FOR ANY BUSINESS",
    description: "No matter the nature of your business — be it a retail store, restaurant, coffee shop, or bar — we're here to guide you in discovering the perfect payment processing solution.",
    image: terminalImg,
    alt: "Modern payment terminal",
  },
  {
    title: "POINT OF SALE (POS) SYSTEMS",
    subtitle: "ULTRAMODERN MANAGEMENT SOLUTIONS FOR YOUR BUSINESS",
    description: "Revolutionize your business operations with our cutting-edge POS systems, offering state-of-the-art management solutions that propel your business forward. Embrace the future of management technology and elevate your efficiency with our ultramodern point-of-sale systems.",
    image: posImg,
    alt: "POS system tablet",
  },
];

export default function LandingPage() {
  const missionRef = useRef(null);
  const [isReady, setIsReady] = useState(false); 
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [form, setForm] = useState({ name: "", email: "", phone: "", processing: "", bestTime: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);
    const handleMouseMove = (e) => {
        if (window.innerWidth > 768) setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://formspree.io/f/mjgazaao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", processing: "", bestTime: "", message: "" });
    }
  };

  const { scrollYProgress: missionScrollY } = useScroll({ target: missionRef, offset: ["start end", "end start"] });
  const yImageParallax = useTransform(missionScrollY, [0, 1], ["-10%", "10%"]);

  const liquidGlassClass = "relative overflow-hidden bg-[#D1FFBD]/10 border border-[#D1FFBD]/30 text-[#D1FFBD] hover:bg-[#D1FFBD]/20 transition-all duration-300 transform-gpu";
  const iosGlassCard = "backdrop-blur-md bg-white/[0.03] border border-white/10 transform-gpu will-change-transform";
  const inputStyle = "w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#D1FFBD]/50 outline-none text-white transition-all";

  return (
    <>
      {/* Glow i miut - Vetëm në Desktop për perfomancë */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#D1FFBD]/20 blur-xl pointer-events-none z-[10000] hidden md:block will-change-transform"
        style={{ transform: `translate3d(${mousePos.x - 16}px, ${mousePos.y - 16}px, 0)` }}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#D1FFBD] origin-left z-[9999]" style={{ scaleX }} />

      <AnimatePresence mode="wait">
        {!isReady && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={`bg-[#050505] min-h-screen text-white font-sans selection:bg-[#D1FFBD] selection:text-black transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }} 
              animate={{ scale: 1, opacity: 0.3 }} 
              transition={{ duration: 1.5 }}
              src={heroBg} 
              className="w-full h-full object-cover transform-gpu" 
              alt="Hero" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
          </div>
          <div className="relative z-10 text-center px-6 will-change-transform">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#D1FFBD] text-[10px] font-bold block mb-6 tracking-[0.4em] uppercase">Future of Digital Payments</motion.span>
            
            <h1 className="flex flex-col gap-1 font-heading text-4xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter uppercase">
              <div className={liquidTextClass}><AnimatedLetters trigger={isReady} text="EASY & SMART" /></div>
              <div className={liquidTextClass}><AnimatedLetters trigger={isReady} text="MERCHANT" /></div>
              <div className="text-[#D1FFBD]"><AnimatedLetters trigger={isReady} text="SOLUTIONS" /></div>
            </h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-14">
              <a href="#contact" className={`inline-block px-12 py-5 rounded-full font-bold text-sm tracking-widest ${liquidGlassClass}`}>GET IN TOUCH</a>
            </motion.div>
          </div>
        </section>

        <section ref={missionRef} id="mission" className="relative py-20 px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={`max-w-[1200px] mx-auto grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden ${iosGlassCard}`}>
            <div className="relative h-[300px] md:h-auto overflow-hidden">
              <motion.img style={{ y: yImageParallax }} src={missionImg} className="absolute inset-0 w-full h-full object-cover opacity-60 transform-gpu" alt="Mission" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-16 text-left">
              <span className="text-[#D1FFBD] font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Our Mission</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">DRIVING <br /> SUCCESS</h2>
              <p className="text-gray-400 leading-relaxed text-base font-light mb-10 border-l border-[#D1FFBD]/50 pl-6">
                Boost Solution Processing LLC helps businesses <span className="text-white font-semibold">maximize profitability</span> at their point of sale. In 15 minutes, we show you how to <span className="text-[#D1FFBD] font-bold">eliminate credit card fees!</span>
              </p>
              <a href="#contact" className={`inline-block text-center px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest ${liquidGlassClass}`}>FIND OUT MORE</a>
            </div>
          </motion.div>
        </section>

        <section id="merchant" className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 text-center md:text-left">
                  <h2 className="font-heading text-2xl font-bold text-white mb-2 uppercase">{service.title}</h2>
                  <h3 className="text-sm text-[#D1FFBD] opacity-80 mb-6 italic">"{service.subtitle}"</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">{service.description}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`flex-1 w-full max-w-sm p-1 rounded-[1.5rem] ${iosGlassCard}`}>
                  <img src={service.image} alt={service.alt} className="w-full aspect-[4/3] object-cover rounded-[1.4rem] opacity-90 transform-gpu" />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`max-w-3xl mx-auto p-8 md:p-12 rounded-[2rem] ${iosGlassCard}`}>
            <h2 className="font-heading text-3xl font-black text-center mb-10 tracking-tighter uppercase">CONNECT <span className="text-[#D1FFBD]">WITH US</span></h2>
            {submitted ? (
              <div className="text-center p-8 bg-[#D1FFBD]/10 rounded-2xl border border-[#D1FFBD]/20 text-[#D1FFBD] uppercase text-sm font-bold">✅ Message Sent Successfully!</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputStyle} />
                </div>
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputStyle} />
                <div className="grid md:grid-cols-2 gap-4">
                  <select required value={form.processing} onChange={(e) => setForm({ ...form, processing: e.target.value })} className={inputStyle}><option value="">Processing amount *</option><option value="$0-10k/mo">$0-10k/mo</option><option value="$10k-$25k/mo">$10k-$25k/mo</option><option value="$25k-$50k/mo">$25k-$50k/mo</option><option value="$50k+/mo">$50k+/mo</option></select>
                  <select value={form.bestTime} onChange={(e) => setForm({ ...form, bestTime: e.target.value })} className={inputStyle}><option value="">Best time to contact</option><option value="Morning">Morning</option><option value="Afternoon">Afternoon</option><option value="Evening">Evening</option></select>
                </div>
                <textarea placeholder="Message..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputStyle} />
                <button type="submit" disabled={loading} className={`w-full py-4 rounded-xl font-black tracking-widest text-xs uppercase transition-all ${loading ? 'bg-gray-800' : 'bg-[#D1FFBD] text-black hover:bg-white transform-gpu'}`}>
                  {loading ? "SENDING..." : "SUBMIT REQUEST"}
                </button>
              </form>
            )}
          </motion.div>
        </section>

        <footer className="py-16 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-6">
              <p className="font-heading text-xl font-black tracking-tighter uppercase">
                <span className="text-white">BOOST</span> <span className="text-[#D1FFBD]"> SOLUTION </span> <span className="text-white/90">PROCESSING LLC</span>
              </p>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">
              © {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
            </p>
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#D1FFBD]">Policy Privacy</a>
          </div>
        </footer>
      </div>
    </>
  );
}