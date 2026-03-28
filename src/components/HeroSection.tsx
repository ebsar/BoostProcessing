import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
        className="absolute h-64 w-64 rounded-full bg-[#D1FFBD]/10 blur-[80px]"
      />
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 text-center font-heading text-2xl font-black tracking-tighter"
        >
          <span className="text-white">
            BOOST <span className="text-[#D1FFBD]"> SOLUTION</span>
          </span>
          <span className="text-white"> PROCESSING </span>
        </motion.div>
        <div className="relative h-[1px] w-40 overflow-hidden rounded-full bg-white/10">
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const liquidTextClass =
  "bg-gradient-to-br from-white via-white/95 to-white/60 bg-clip-text text-transparent transform-gpu";

const AnimatedLetters = ({ text, className, trigger }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.span
      variants={sentence}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className={`inline-block origin-bottom ${className || "text-white"}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const FloatingOrb = ({ className, xRange, yRange, duration = 12 }) => (
  <motion.div
    animate={{
      x: xRange,
      y: yRange,
      scale: [1, 1.08, 0.96, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className={className}
  />
);

const services = [
  {
    title: "MERCHANT PROCESSING",
    subtitle: "WE CAN CHANGE THE WAY YOU GET PAID",
    description:
      "Delivering secure, reliable, and high-value credit card processing services that you can trust. Our commitment to safety ensures your transactions are handled with dependability, giving you peace of mind and exceptional value.",
    image: merchantImg,
    alt: "Merchant processing payment",
  },
  {
    title: "TERMINAL EQUIPMENT",
    subtitle: "THE BEST EQUIPMENT FOR ANY BUSINESS",
    description:
      "No matter the nature of your business, whether it is a retail store, restaurant, coffee shop, or bar, we are here to guide you toward the right payment processing solution.",
    image: terminalImg,
    alt: "Modern payment terminal",
  },
  {
    title: "POINT OF SALE (POS) SYSTEMS",
    subtitle: "ULTRAMODERN MANAGEMENT SOLUTIONS FOR YOUR BUSINESS",
    description:
      "Revolutionize your business operations with our cutting-edge POS systems, offering state-of-the-art management solutions that move your business forward and improve efficiency.",
    image: posImg,
    alt: "POS system tablet",
  },
];

const serviceAccentClasses = [
  {
    title: "text-[#D1FFBD]",
    subtitle: "text-[#D1FFBD]",
    overlay: "bg-gradient-to-tr from-black/50 via-transparent to-[#D1FFBD]/12",
    panel: "border-white/10 bg-black/35",
  },
  {
    title: "text-[#D1FFBD]",
    subtitle: "text-[#D1FFBD]",
    overlay: "bg-gradient-to-tr from-black/50 via-transparent to-[#D1FFBD]/12",
    panel: "border-white/10 bg-black/35",
  },
  {
    title: "text-[#D1FFBD]",
    subtitle: "text-[#D1FFBD]",
    overlay: "bg-gradient-to-tr from-black/50 via-transparent to-[#D1FFBD]/12",
    panel: "border-white/10 bg-black/35",
  },
];

export default function LandingPage() {
  const missionRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    processing: "",
    bestTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [10, -10]),
    { stiffness: 120, damping: 20 },
  );
  const heroRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-12, 12]),
    { stiffness: 120, damping: 20 },
  );
  const heroLayerX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-30, 30]),
    { stiffness: 90, damping: 18 },
  );
  const heroLayerY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-24, 24]),
    { stiffness: 90, damping: 18 },
  );
  const heroOrbX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-45, 45]),
    { stiffness: 80, damping: 18 },
  );
  const heroOrbY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-35, 35]),
    { stiffness: 80, damping: 18 },
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1500);

    const handleMouseMove = (event) => {
      if (window.innerWidth > 768) {
        setMousePos({ x: event.clientX, y: event.clientY });
        pointerX.set(event.clientX / window.innerWidth - 0.5);
        pointerY.set(event.clientY / window.innerHeight - 0.5);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    try {
      const acceptedTerms = window.localStorage.getItem("boost-terms-accepted");
      setShowTermsPopup(acceptedTerms !== "true");
    } catch {
      setShowTermsPopup(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/mjgazaao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        processing: "",
        bestTime: "",
        message: "",
      });
    }
  };

  const { scrollYProgress: missionScrollY } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });
  const yImageParallax = useTransform(missionScrollY, [0, 1], ["-10%", "10%"]);

  const liquidGlassClass =
    "relative overflow-hidden border border-[#D1FFBD]/30 bg-[#D1FFBD]/10 text-[#D1FFBD] shadow-[0_14px_40px_rgba(209,255,189,0.08)] transition-all duration-300 hover:bg-[#D1FFBD]/20 transform-gpu";
  const iosGlassCard =
    "backdrop-blur-md bg-white/[0.03] border border-white/10 transform-gpu will-change-transform";
  const inputStyle =
    "w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all focus:ring-1 focus:ring-[#D1FFBD]/50";
  const showContactSection = false;

  const acceptTermsPopup = () => {
    try {
      window.localStorage.setItem("boost-terms-accepted", "true");
    } catch {
      // Ignore storage failures and simply dismiss the popup for this session.
    }

    setShowTermsPopup(false);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[10000] hidden h-8 w-8 rounded-full bg-[#D1FFBD]/20 blur-xl pointer-events-none md:block will-change-transform"
        style={{ transform: `translate3d(${mousePos.x - 16}px, ${mousePos.y - 16}px, 0)` }}
      />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[9999] h-[2px] origin-left bg-[#D1FFBD]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isReady && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {isReady && showTermsPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/75 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#080808]/95 p-8 text-center shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D1FFBD]">
                Terms Notice
              </p>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase tracking-tight text-white">
                Do You Accept Terms And Conditions?
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                Please review the Terms and Conditions before continuing to use the website.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={acceptTermsPopup}
                  className="w-full rounded-full bg-[#D1FFBD] px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black transition hover:bg-white"
                >
                  Accept
                </button>
                <a
                  href="/terms-of-service.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-white/10 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:border-[#D1FFBD] hover:text-[#D1FFBD]"
                >
                  Read Terms
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`relative min-h-screen bg-[#050505] font-sans text-white selection:bg-[#D1FFBD] selection:text-black transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute right-[-4rem] top-[22%] h-80 w-80 rounded-full bg-[#D1FFBD]/10 blur-[140px]" />
        </div>

        <section
          id="home"
          className="relative flex h-screen w-full items-center justify-center overflow-hidden [perspective:1600px]"
        >
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5 }}
              src={heroBg}
              className="h-full w-full object-cover transform-gpu"
              alt="Boost Solution hero background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
          </div>

          <motion.div
            style={{ x: heroOrbX, y: heroOrbY }}
            className="pointer-events-none absolute inset-0 z-[1] hidden opacity-70 md:block"
          >
            <FloatingOrb
              className="absolute left-[12%] top-[20%] h-28 w-28 rounded-full border border-[#D1FFBD]/15 bg-[#D1FFBD]/[0.08] blur-2xl"
              xRange={[0, 18, -10]}
              yRange={[0, -22, 8]}
              duration={14}
            />
            <FloatingOrb
              className="absolute right-[14%] top-[24%] h-20 w-20 rounded-full border border-white/10 bg-white/8 blur-xl"
              xRange={[0, -14, 10]}
              yRange={[0, 18, -10]}
              duration={11}
            />
            <FloatingOrb
              className="absolute bottom-[26%] right-[20%] h-36 w-36 rounded-full bg-[#D1FFBD]/8 blur-[100px]"
              xRange={[0, 24, -18]}
              yRange={[0, -20, 12]}
              duration={16}
            />
          </motion.div>

          <motion.div
            style={{ x: heroLayerX, y: heroLayerY }}
            className="pointer-events-none absolute inset-0 z-[2] hidden opacity-60 md:block"
          >
            <div className="absolute left-[10%] top-[16%] h-[240px] w-[240px] rounded-full border border-white/6" />
            <div className="absolute right-[10%] top-[20%] h-[160px] w-[160px] rotate-12 rounded-[2rem] border border-[#D1FFBD]/10 bg-white/[0.02] backdrop-blur-sm" />
          </motion.div>

          <motion.div
            style={{
              rotateX: heroRotateX,
              rotateY: heroRotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative z-10 mx-auto max-w-5xl px-6 text-center will-change-transform"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D1FFBD] backdrop-blur-md"
            >
              Future of Digital Payments
            </motion.span>

            <motion.h1
              style={{ transform: "translateZ(110px)" }}
              className="flex flex-col gap-2 font-heading text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight md:text-6xl lg:text-7xl"
            >
              <div className={liquidTextClass}>
                <AnimatedLetters trigger={isReady} text="EASY & SMART" />
              </div>
              <div className={liquidTextClass}>
                <AnimatedLetters trigger={isReady} text="MERCHANT" />
              </div>
              <div className="text-[#D1FFBD]">
                <AnimatedLetters trigger={isReady} text="SOLUTIONS" />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ transform: "translateZ(80px)" }}
              className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/70 md:text-[15px]"
            >
              Advanced payment experiences with a sharper visual identity, layered depth, and a
              more premium digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col items-center gap-6"
            >
              <a
                href="#contact"
                className={`inline-block rounded-full px-10 py-4 text-xs font-bold tracking-[0.28em] ${liquidGlassClass}`}
              >
                GET IN TOUCH
              </a>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{ transform: "translateZ(140px)" }}
                className={`hidden grid-cols-3 gap-3 rounded-[1.5rem] p-3 md:grid ${iosGlassCard}`}
              >
                <div className="min-w-[120px] rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Approval</p>
                  <p className="mt-1.5 text-xl font-black text-white">15 Min</p>
                </div>
                <div className="min-w-[120px] rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Savings</p>
                  <p className="mt-1.5 text-xl font-black text-[#D1FFBD]">0 Fee Plan</p>
                </div>
                <div className="min-w-[120px] rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Support</p>
                  <p className="mt-1.5 text-xl font-black text-white">24/7</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section ref={missionRef} id="mission" className="relative px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`mx-auto grid max-w-[1200px] gap-0 overflow-hidden rounded-[2rem] md:grid-cols-2 ${iosGlassCard}`}
          >
            <div className="relative h-[300px] overflow-hidden md:h-auto">
              <motion.img
                style={{ y: yImageParallax }}
                src={missionImg}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transform-gpu"
                alt="Mission"
              />
            </div>
            <div className="flex flex-col justify-center p-8 text-left md:p-16">
              <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D1FFBD]">
                Our Mission
              </span>
              <h2 className="mb-6 font-heading text-3xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl">
                DRIVING <br /> SUCCESS
              </h2>
              <p className="mb-10 border-l border-[#D1FFBD]/50 pl-6 text-base font-light leading-relaxed text-gray-400">
                Boost Solution Processing LLC helps businesses{" "}
                <span className="font-semibold text-white">maximize profitability</span> at
                their point of sale. In 15 minutes, we show you how to{" "}
                <span className="font-bold text-[#D1FFBD]">eliminate credit card fees!</span>
              </p>
              <a
                href="#contact"
                className={`inline-block rounded-full px-8 py-3.5 text-center text-[10px] font-bold tracking-widest ${liquidGlassClass}`}
              >
                FIND OUT MORE
              </a>
            </div>
          </motion.div>
        </section>

        <section id="merchant" className="px-6 py-20">
          <div className="mx-auto max-w-6xl space-y-24">
            {services.map((service, index) => {
              const accent = serviceAccentClasses[index % serviceAccentClasses.length];

              return (
                <div
                  key={service.title}
                  className={`flex flex-col items-center gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left"
                  >
                    <h2 className="mb-2 text-2xl font-bold uppercase text-white font-heading">
                      {service.title}
                    </h2>
                    <h3 className={`mb-6 text-sm italic opacity-90 ${accent.subtitle}`}>
                      "{service.subtitle}"
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{
                      y: -12,
                      rotateX: -8,
                      rotateY: index % 2 === 0 ? 10 : -10,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    viewport={{ once: true }}
                    className={`group w-full max-w-sm flex-1 rounded-[1.5rem] p-1 shadow-[0_35px_80px_rgba(0,0,0,0.35)] [perspective:1200px] [transform-style:preserve-3d] ${iosGlassCard}`}
                  >
                    <div className="relative overflow-hidden rounded-[1.4rem]">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="aspect-[4/3] w-full rounded-[1.4rem] object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 transform-gpu"
                      />
                      <div className={`absolute inset-0 ${accent.overlay}`} />
                      <div
                        className={`absolute inset-x-6 bottom-6 rounded-2xl border px-4 py-3 backdrop-blur-md ${accent.panel}`}
                      >
                        <p className={`text-[10px] uppercase tracking-[0.35em] ${accent.title}`}>
                          {service.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {showContactSection && (
          <section id="contact" className="px-6 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`mx-auto max-w-3xl rounded-[2rem] p-8 md:p-12 ${iosGlassCard}`}
            >
              <h2 className="mb-10 text-center font-heading text-3xl font-black uppercase tracking-tighter">
                CONNECT <span className="text-[#D1FFBD]">WITH US</span>
              </h2>

              {submitted ? (
                <div className="rounded-2xl border border-[#D1FFBD]/20 bg-[#D1FFBD]/10 p-8 text-center text-sm font-bold uppercase text-[#D1FFBD]">
                  Message sent successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className={inputStyle}
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className={inputStyle}
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    className={inputStyle}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      required
                      value={form.processing}
                      onChange={(event) => setForm({ ...form, processing: event.target.value })}
                      className={inputStyle}
                    >
                      <option value="">Processing amount *</option>
                      <option value="$0-10k/mo">$0-10k/mo</option>
                      <option value="$10k-$25k/mo">$10k-$25k/mo</option>
                      <option value="$25k-$50k/mo">$25k-$50k/mo</option>
                      <option value="$50k+/mo">$50k+/mo</option>
                    </select>

                    <select
                      value={form.bestTime}
                      onChange={(event) => setForm({ ...form, bestTime: event.target.value })}
                      className={inputStyle}
                    >
                      <option value="">Best time to contact</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Message..."
                    rows={3}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className={inputStyle}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-xl py-4 text-xs font-black uppercase tracking-widest transition-all ${
                      loading
                        ? "bg-gray-800"
                        : "bg-[#D1FFBD] text-black shadow-[0_20px_45px_rgba(209,255,189,0.18)] hover:bg-white transform-gpu"
                    }`}
                  >
                    {loading ? "SENDING..." : "SUBMIT REQUEST"}
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-500">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/terms-of-service.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D1FFBD] hover:text-white"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D1FFBD] hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </section>
        )}
        <footer className="border-t border-white/5 bg-black/20 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-6">
              <p className="font-heading text-xl font-black uppercase tracking-tighter">
                <span className="text-white">BOOST</span>{" "}
                <span className="text-[#D1FFBD]"> SOLUTION </span>{" "}
                <span className="text-white/90">PROCESSING LLC</span>
              </p>
            </div>

            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gray-500">
              Copyright {new Date().getFullYear()} Boost Solution Processing LLC. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D1FFBD]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D1FFBD]"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
