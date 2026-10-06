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
    name: "",
    email: "",
    phone: "",
    processing: "",
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
  );
}
