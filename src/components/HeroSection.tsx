<<<<<<< HEAD
import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import missionImg from "@/assets/mission-img.jpg";
import merchantImg from "@/assets/merchant-img.jpg";
import posImg from "@/assets/pos-img.jpg";
import terminalImg from "@/assets/terminal-img.jpg";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  processing: string;
  message: string;
};

const services = [
  {
    eyebrow: "CARD PROCESSING",
    title: "Payments that make more sense for your business.",
    description:
      "Give customers an easy way to pay and get a transparent processing setup built around how you sell.",
    image: merchantImg,
    icon: CreditCard,
  },
  {
    eyebrow: "SMART HARDWARE",
    title: "A terminal for every counter, table, and team.",
    description:
      "From a simple countertop reader to a mobile setup, choose hardware that keeps checkout moving.",
    image: terminalImg,
    icon: Smartphone,
  },
  {
    eyebrow: "POINT OF SALE",
    title: "See the whole day, not just the last sale.",
    description:
      "Bring payments, orders, staff, and reporting into one POS system that is easy to run.",
    image: posImg,
    icon: MonitorSmartphone,
  },
];

const benefits = [
  "A custom setup for your business model",
  "Equipment and onboarding without the runaround",
  "Clear reporting that makes the numbers useful",
];

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Once we understand your business and current setup, we can outline the right path and next steps in a focused 15-minute consultation.",
  },
  {
    question: "Can you help reduce credit card fees?",
    answer:
      "Yes. We review how you process today and explain the options that may help you manage or offset card acceptance costs.",
  },
  {
    question: "Do you provide payment terminals and POS systems?",
    answer:
      "Yes. We help match countertop, mobile, and point-of-sale equipment to the way your team serves customers.",
  },
  {
    question: "Will I have support after setup?",
    answer:
      "Absolutely. You will have a real team to contact when you need help with your account, equipment, or payment flow.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0b7564] focus:ring-4 focus:ring-[#0b7564]/10";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState<FormValues>({
=======
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
>>>>>>> 953a9aac626f00faed664d54c596d2633d0fb46d
    name: "",
    email: "",
    phone: "",
    processing: "",
<<<<<<< HEAD
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mjgazaao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Unable to send the form");

      setFormStatus("success");
      setForm({ name: "", email: "", phone: "", processing: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="overflow-hidden bg-white text-slate-950">
      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_82%_24%,rgba(57,211,174,0.12),transparent_27%),radial-gradient(circle_at_12%_86%,rgba(39,110,241,0.12),transparent_28%),linear-gradient(135deg,#fcfdff_0%,#f2f6ff_55%,#fbfcff_100%)] pb-14 pt-32 sm:pb-20 sm:pt-40"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(39,110,241,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(39,110,241,.07)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="pointer-events-none absolute -right-16 top-28 -z-10 h-64 w-64 rounded-full border-[20px] border-[#276ef1]/12 sm:h-96 sm:w-96" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-24 lg:px-10">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={reveal}
              className="max-w-3xl"
            >
              <h1 className="max-w-2xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-[#0a1c47] sm:text-6xl lg:text-7xl">
                Get paid with more <span className="text-[#276ef1]">clarity.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Payment processing, terminals, and POS systems that help your business serve customers well and keep more control of every sale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b7564] px-5 text-sm font-bold text-white shadow-[0_12px_26px_rgba(11,117,100,.22)] transition hover:-translate-y-0.5 hover:bg-[#075b4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]"
                >
                  Get a custom quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0b7564]/20 bg-white/85 px-5 text-sm font-bold text-[#0a1c47] transition hover:-translate-y-0.5 hover:border-[#0b7564]/45 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]"
                >
                  Explore solutions
                </a>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
                {[
                  "15-minute consultations",
                  "Clear, practical guidance",
                  "People-first support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#276ef1]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
              aria-hidden="true"
              className="relative mx-auto hidden w-72 shrink-0 lg:block"
            >
              <div className="absolute -right-10 top-5 h-52 w-52 rounded-full bg-[#276ef1]/12 blur-3xl" />
              <div className="absolute -left-8 bottom-2 h-24 w-24 rounded-full bg-[#ffd166]/45 blur-2xl" />
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-white/90 bg-white/80 p-7 shadow-[0_24px_54px_rgba(10,28,71,.14)] backdrop-blur-sm">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[18px] border-[#276ef1]/15" />
                <div className="absolute bottom-7 left-7 h-16 w-16 rounded-3xl bg-[#39d3ae]/16" />
                <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-[#ffd166]" />
                <div className="relative h-44 w-full -rotate-6 rounded-[1.5rem] bg-[#0a1c47] p-5 shadow-[0_20px_30px_rgba(10,28,71,.2)]">
                  <div className="h-8 w-11 rounded-lg bg-[#ffd166]" />
                  <div className="mt-9 flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded-full bg-white/85" />
                      <div className="h-2 w-16 rounded-full bg-white/35" />
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-[#276ef1]" />
                  </div>
                  <div className="mt-6 h-1.5 w-20 rounded-full bg-[#39d3ae]" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Boost Solution benefits" className="border-y border-slate-200 bg-white py-5">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <p className="text-sm font-semibold text-[#0a1c47]">Practical payments support for growing businesses.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              <span>Merchant processing</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#39d3ae] sm:block" aria-hidden="true" />
              <span>Modern hardware</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#39d3ae] sm:block" aria-hidden="true" />
              <span>Personal guidance</span>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-[#fffaf4] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-[2rem] bg-[#0a1c47] p-3 shadow-[0_22px_55px_rgba(10,28,71,.16)]">
                <img src={missionImg} alt="Business owner using a payment terminal" className="aspect-[1.15/1] w-full rounded-[1.35rem] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#ffd166] px-5 py-4 text-[#0a1c47] shadow-[0_16px_35px_rgba(255,191,63,.25)] sm:-right-6">
                <p className="text-2xl font-bold tracking-[-0.05em]">15 min</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em]">to start a conversation</p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              className="order-1 max-w-xl lg:order-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b7564]">Why Boost Solution</p>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#0a1c47] sm:text-5xl">
                Payment support should feel like a partnership.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                We help local businesses find a payment setup that fits their customers, team, and goals—without making the process harder than it needs to be.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-semibold text-[#0a1c47]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#276ef1]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-bold text-[#276ef1] transition hover:text-[#1f5fcf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">
                Talk through your options <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b7564]">Solutions that work together</p>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#0a1c47] sm:text-5xl">
                One partner for every way you get paid.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Choose what you need today, with a setup that can keep pace when your business changes tomorrow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.eyebrow}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.35 }}
                    className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,42,92,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,42,92,.12)]"
                  >
                    <div className="relative overflow-hidden">
                      <img src={service.image} alt="" className="aspect-[1.45/1] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c47]/35 to-transparent" />
                      <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#276ef1] shadow-lg">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b7564]">{service.eyebrow}</p>
                      <h3 className="mt-3 font-heading text-xl font-bold leading-tight tracking-[-0.025em] text-[#0a1c47]">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                      <a href="#contact" className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[#276ef1] transition hover:text-[#1f5fcf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">
                        Find the right fit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0a1c47] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d1ffbd]">A simpler way forward</p>
              <h2 className="font-heading text-4xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl">Better payment decisions start with a real conversation.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                ["01", "Tell us how you sell", "We learn about your customers, current checkout flow, and what needs to work better."],
                ["02", "See a tailored path", "We walk you through practical options for processing, equipment, and point of sale."],
                ["03", "Launch with support", "Your setup is ready to use with a team that stays available after you go live."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                  <p className="text-sm font-bold text-[#ffd166]">{number}</p>
                  <h3 className="mt-6 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100/75">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f4f8ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b7564]">Common questions</p>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#0a1c47] sm:text-5xl">Clear answers, before you commit.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Every business is different. These answers cover the questions we hear most often.</p>
              <a href="#contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#ffd166] px-5 text-sm font-bold text-[#0a1c47] transition hover:-translate-y-0.5 hover:bg-[#ffc14e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">
                Ask us a question <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex min-h-[76px] w-full items-center justify-between gap-5 py-4 text-left text-sm font-bold text-[#0a1c47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0b7564]"
                    >
                      {faq.question}
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[#0b7564] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-7 text-sm leading-6 text-slate-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#39d3ae]/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-start gap-12 rounded-[2rem] bg-[#fff5e6] p-6 sm:p-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:p-14">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b7564]"><Zap className="h-4 w-4" aria-hidden="true" /> Let&apos;s get specific</p>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#0a1c47] sm:text-5xl">Build a payment setup that feels right.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">Tell us a little about your business. We will use it to make the next conversation more useful—not more complicated.</p>
              <div className="mt-9 space-y-4">
                {[
                  [ShieldCheck, "A straight answer about your options"],
                  [MonitorSmartphone, "Hardware and POS guidance when you need it"],
                  [MessageCircle, "A real person to follow up with you"],
                ].map(([Icon, label]) => {
                  const ItemIcon = Icon as typeof ShieldCheck;
                  return (
                    <div key={label as string} className="flex items-center gap-3 text-sm font-semibold text-[#0a1c47]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0b7564] shadow-sm"><ItemIcon className="h-4 w-4" aria-hidden="true" /></span>
                      {label as string}
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-[0_18px_40px_rgba(32,70,130,.10)] sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#0a1c47]">Full name
                  <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={inputClass} placeholder="Your name" autoComplete="name" />
                </label>
                <label className="text-sm font-semibold text-[#0a1c47]">Work email
                  <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} placeholder="you@business.com" autoComplete="email" />
                </label>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[#0a1c47]">Phone <span className="font-normal text-slate-400">(optional)</span>
                  <input type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={inputClass} placeholder="(555) 000-0000" autoComplete="tel" />
                </label>
                <label className="text-sm font-semibold text-[#0a1c47]">Monthly processing
                  <select required value={form.processing} onChange={(event) => setForm({ ...form, processing: event.target.value })} className={inputClass}>
                    <option value="">Select range</option>
                    <option value="$0–10k/mo">$0–10k/mo</option>
                    <option value="$10k–25k/mo">$10k–25k/mo</option>
                    <option value="$25k–50k/mo">$25k–50k/mo</option>
                    <option value="$50k+/mo">$50k+/mo</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 block text-sm font-semibold text-[#0a1c47]">What would you like to improve? <span className="font-normal text-slate-400">(optional)</span>
                <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className={`${inputClass} min-h-28 resize-y`} placeholder="Tell us what you need help with." />
              </label>
              {formStatus === "success" && <p role="status" className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">Thanks—your message is on its way. We&apos;ll be in touch shortly.</p>}
              {formStatus === "error" && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">We couldn&apos;t send that right now. Please try again or contact us directly.</p>}
              <button type="submit" disabled={formStatus === "loading"} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0b7564] px-5 text-sm font-bold text-white shadow-[0_12px_26px_rgba(11,117,100,.20)] transition hover:bg-[#075b4d] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7564]">
                {formStatus === "loading" ? "Sending your request…" : "Request a custom quote"}
                {formStatus !== "loading" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">By submitting, you agree to our <a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0b7564] underline-offset-2 hover:underline">Terms &amp; Conditions</a> and <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0b7564] underline-offset-2 hover:underline">Privacy Policy</a>.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a1c47] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src="/brand-mark.svg" alt="" aria-hidden="true" className="h-9 w-9" />
              <p className="font-heading text-lg font-bold tracking-[-0.035em]">Boost Solution <span className="text-[#a6ff7e]">Processing</span></p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100/75">A more practical way to manage payments, hardware, and point of sale.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-blue-100/75">
            <a href="#mission" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#faq" className="transition hover:text-white">FAQs</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-blue-100/50">© {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.</div>
      </footer>
    </div>
=======
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
>>>>>>> 953a9aac626f00faed664d54c596d2633d0fb46d
  );
}
