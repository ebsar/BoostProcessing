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
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505]"
    >
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-64 h-64 bg-[#D1FFBD]/20 blur-[100px] rounded-full"
      />
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl font-black tracking-tighter mb-4 text-center"
        >
          <span className="text-white">BOOST <span className="text-[#D1FFBD]"> SOLUTION</span></span>
          <span className="text-white"> PROCESSING </span>
        </motion.div>
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D1FFBD] to-transparent"
          />
        </div>
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mt-6"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const liquidTextClass = "bg-gradient-to-br from-white via-white/80 to-white/20 bg-clip-text text-transparent backdrop-blur-sm";

const AnimatedLetters = ({ text, className, trigger }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 60, scale: 0.5, rotate: -10 },
    visible: { 
      opacity: 1, y: 0, scale: 1, rotate: 0, 
      transition: { type: "spring", damping: 12, stiffness: 150 } 
    },
  };

  return (
    <motion.span 
      variants={sentence} 
      initial="hidden" 
      animate={trigger ? "visible" : "hidden"} 
      className={className}
    >
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({ name: "", email: "", phone: "", processing: "", bestTime: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2500);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
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
  const yImageParallax = useTransform(missionScrollY, [0, 1], ["-15%", "15%"]);

  const liquidGlassClass = "relative overflow-hidden backdrop-blur-md bg-[#D1FFBD]/10 border border-[#D1FFBD]/30 text-[#D1FFBD] shadow-[0_0_20px_rgba(209,255,189,0.15)] hover:bg-[#D1FFBD]/20 transition-all duration-300";
  const iosGlassCard = "backdrop-blur-[30px] backdrop-saturate-[180%] bg-white/[0.03] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]";
  const inputStyle = "w-full px-5 py-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D1FFBD]/30 focus:border-[#D1FFBD]/50 transition-all duration-300 text-white placeholder:text-gray-500";

  return (
    <>
      {/* SHTUAR: Custom Cursor Drita delikate */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#D1FFBD]/20 blur-xl pointer-events-none z-[10000] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#D1FFBD] origin-left z-[9999] shadow-[0_0_15px_rgba(209,255,189,0.5)]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isReady && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={`bg-[#050505] min-h-screen text-white font-sans selection:bg-[#D1FFBD] selection:text-black transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* SHTUAR: Ambient Glow që ndjek miun vetëm në Hero */}
            <motion.div 
              className="absolute w-[600px] h-[600px] bg-[#D1FFBD]/5 blur-[120px] rounded-full pointer-events-none"
              animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
            />
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }} 
              animate={{ scale: 1.1, opacity: 0.4 }} 
              transition={{ duration: 2 }}
              src={heroBg} 
              className="w-full h-full object-cover" 
              alt="Hero" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/80 to-[#050505]" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: -20 }} 
              animate={isReady ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: 0.8 }}
              className="text-[#D1FFBD] text-[10px] font-bold block mb-6 tracking-[0.4em] uppercase"
            >
              Future of Digital Payments
            </motion.span>
            
            <h1 className="flex flex-col gap-1 font-heading text-4xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
              <div className={liquidTextClass}>
                <AnimatedLetters trigger={isReady} text="EASY & SMART" />
              </div>
              <div className={liquidTextClass}>
                <AnimatedLetters trigger={isReady} text="MERCHANT" />
              </div>
              <div className="bg-gradient-to-br from-[#D1FFBD] via-[#D1FFBD]/90 to-[#D1FFBD]/40 bg-clip-text text-transparent">
                <AnimatedLetters trigger={isReady} text="SOLUTIONS" />
              </div>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={isReady ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: 1.8, type: "spring" }} 
              className="mt-14"
            >
              <a href="#contact" className={`inline-block px-12 py-5 rounded-full font-bold text-sm tracking-widest ${liquidGlassClass} hover:scale-105 active:scale-95`}>GET IN TOUCH</a>
            </motion.div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section ref={missionRef} id="mission" className="relative py-24 px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={`max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 items-stretch rounded-[2.5rem] overflow-hidden ${iosGlassCard}`}
          >
            <div className="relative h-[350px] md:h-auto overflow-hidden">
              <motion.img style={{ y: yImageParallax, scale: 1.2 }} src={missionImg} className="absolute inset-0 w-full h-full object-cover opacity-70" alt="Mission" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-16 text-left bg-black/20">
              <span className="text-[#D1FFBD] font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Our Mission</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">DRIVING <br /> SUCCESS</h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light mb-10 border-l-2 border-[#D1FFBD]/50 pl-6 max-w-xl">
                Boost Solution Processing LLC helps businesses <span className="text-white font-semibold">maximize profitability</span> at their point of sale. In 15 minutes, we show you how to <span className="text-[#D1FFBD] font-bold">eliminate credit card fees!</span>
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="#contact" className={`inline-block px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest ${liquidGlassClass}`}>FIND OUT MORE</a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section id="merchant" className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {services.map((service, index) => (
              <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 md:gap-24 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex-[1.2] text-center md:text-left"
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight uppercase">{service.title}</h2>
                  <h3 className="font-heading text-base font-semibold text-[#D1FFBD] opacity-80 mb-6 italic tracking-wide">"{service.subtitle}"</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto md:mx-0">{service.description}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`flex-1 w-full max-w-md p-1.5 rounded-[2rem] ${iosGlassCard}`}
                >
                  <img src={service.image} alt={service.alt} className="w-full h-full aspect-[4/3] object-cover rounded-[1.8rem] opacity-80 hover:opacity-100 transition-all duration-700" />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D1FFBD]/5 blur-[120px] rounded-full pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto p-8 md:p-14 rounded-[3rem] ${iosGlassCard} relative z-10`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-10 tracking-tighter uppercase">CONNECT <span className="text-[#D1FFBD]">WITH US</span></h2>
            {submitted ? (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center p-10 bg-[#D1FFBD]/10 rounded-3xl border border-[#D1FFBD]/20 text-[#D1FFBD] font-bold tracking-widest uppercase text-sm">✅ Message Sent Successfully!</motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputStyle} />
                </div>
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputStyle} />
                <div className="grid md:grid-cols-2 gap-5">
                  <select required value={form.processing} onChange={(e) => setForm({ ...form, processing: e.target.value })} className={`${inputStyle} appearance-none cursor-pointer`}><option value="" className="bg-black text-sm">Processing amount *</option><option value="$0-10k/mo" className="bg-black">$0-10k/mo</option><option value="$10k-$25k/mo" className="bg-black">$10k-$25k/mo</option><option value="$25k-$50k/mo" className="bg-black">$25k-$50k/mo</option><option value="$50k+/mo" className="bg-black">$50k+/mo</option></select>
                  <select value={form.bestTime} onChange={(e) => setForm({ ...form, bestTime: e.target.value })} className={`${inputStyle} appearance-none cursor-pointer`}><option value="" className="bg-black text-sm">Best time to contact</option><option value="Morning" className="bg-black">Morning</option><option value="Afternoon" className="bg-black">Afternoon</option><option value="Evening" className="bg-black">Evening</option></select>
                </div>
                <textarea placeholder="Message..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputStyle} />
                <button type="submit" disabled={loading} className={`w-full py-4 rounded-xl font-black tracking-[0.2em] text-[11px] uppercase transition-all duration-500 ${loading ? 'bg-gray-800 text-gray-400' : 'bg-[#D1FFBD] text-black hover:bg-white shadow-[0_10px_30px_rgba(209,255,189,0.2)] hover:-translate-y-1'}`}>
                  {loading ? "SENDING..." : "SUBMIT REQUEST"}
                </button>
              </form>
            )}
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D1FFBD]/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-8 group">
              <p className="font-heading text-xl md:text-2xl font-black tracking-tighter transition-all duration-500">
                <span className="text-white">BOOST</span>
                <span className="text-[#D1FFBD]"> SOLUTION </span>
                <span className="text-white/90">PROCESSING LLC</span>
              </p>
              <div className="w-12 h-[2px] bg-[#D1FFBD]/50 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-24" />
            </motion.div>
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium opacity-70">
                © {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
              </p>
              <div className="flex justify-center items-center gap-6">
                <a 
  href="/privacy-policy.html" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#D1FFBD]"
>Policy Privacy
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D1FFBD] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}