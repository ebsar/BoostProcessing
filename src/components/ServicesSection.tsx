import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 1. IMPORTET E IMAZHEVE TUAJA
import heroBg from "@/assets/hero-bg.jpg";
import missionImg from "@/assets/mission-img.jpg";

// --- ANIMACIONI I SHKRONJAVE (SMOOTH & JUMPING) ---
const AnimatedLetters = ({ text, className }) => {
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.5, rotate: -10 },
    visible: { 
      opacity: 1, y: 0, scale: 1, rotate: 0, 
      transition: { type: "spring", damping: 12, stiffness: 150 } 
    },
  };

  return (
    <motion.span variants={sentenceVariants} initial="hidden" animate="visible" className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block origin-bottom text-white">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function LandingPage() {
  const missionRef = useRef(null);

  // Parallax për imazhin e Mission
  const { scrollYProgress: missionScrollY } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });
  const yImageParallax = useTransform(missionScrollY, [0, 1], ["-15%", "15%"]);

  // STYLE PËR LIQUID GLASS BUTTON
  const liquidGlassClass = "relative overflow-hidden backdrop-blur-md bg-[#D1FFBD]/10 border border-[#D1FFBD]/30 text-[#D1FFBD] shadow-[0_0_20px_rgba(209,255,189,0.15)] before:absolute before:inset-0 before:-translate-x-full before:hover:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#D1FFBD]/20 hover:border-[#D1FFBD]/60 transition-all duration-300";

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      
      {/* 2. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} className="w-full h-full object-cover scale-110 opacity-50" alt="Hero" />
          {/* Overlay i zi që krijon thellësi */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }} 
            animate={{ opacity: 1, letterSpacing: "0.4em" }} 
            className="text-[#D1FFBD] text-[10px] font-bold block mb-6 uppercase"
          >
            Future of Digital Payments
          </motion.span>
          
          <h1 className="flex flex-col gap-1 font-heading text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
            <AnimatedLetters text="EASY & SMART" />
            <AnimatedLetters text="MERCHANT" />
            <AnimatedLetters text="SOLUTIONS" className="!text-[#D1FFBD]" />
          </h1>

          {/* LIQUID GLASS BUTTON - HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="mt-14"
          >
            <a
              href="#contact"
              className={`inline-block px-12 py-5 rounded-full font-bold text-sm tracking-widest ${liquidGlassClass} hover:scale-105 active:scale-95`}
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[8px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#D1FFBD] to-transparent" />
        </motion.div>
      </section>

      {/* 3. MISSION SECTION (TASHMË TOTALISHT DARK) */}
      <section ref={missionRef} id="mission" className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch border border-white/5 rounded-[2rem] overflow-hidden bg-white/[0.02] backdrop-blur-sm">
          
          {/* Imazhi me Parallax */}
          <div className="relative h-[400px] md:h-auto overflow-hidden">
            <motion.img
              style={{ y: yImageParallax, scale: 1.25 }}
              src={missionImg}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Mission"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:hidden" />
          </div>

          {/* Teksti (I bardhë për Dark Mode) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 18, stiffness: 80 }}
            className="flex flex-col justify-center p-10 md:p-20 text-left"
          >
            <span className="text-[#D1FFBD] font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Our Mission</span>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              DRIVING <br /> SUCCESS
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg font-light mb-12 border-l-2 border-[#D1FFBD]/50 pl-6">
              Boost Solution Processing LLC helps businesses 
              <span className="text-white font-semibold"> maximize profitability </span> 
              at their point of sale. In 15 minutes, we show you how to 
              <span className="text-[#D1FFBD] font-bold"> eliminate credit card fees!</span>
            </p>

            {/* LIQUID GLASS BUTTON - MISSION */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className={`inline-block px-10 py-4 rounded-full font-bold text-xs tracking-widest ${liquidGlassClass}`}
              >
                FIND OUT MORE
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}