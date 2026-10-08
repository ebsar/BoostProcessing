import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import merchantImg from "@/assets/merchant-img.jpg";
import Squiggle from "@/components/Squiggle";

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-white px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-80 w-80 rounded-full bg-[#D1FFBD]/50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div initial={reduceMotion ? false : "hidden"} animate="visible" variants={reveal} className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-mint-light/60 px-4 py-1.5 text-sm font-semibold text-teal">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Free terminal placement
          </p>
          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[3.75rem]">
            We&apos;ll put a card terminal on your{" "}
            <span className="relative inline-block">
              counter.
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-mint" />
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate">
            I&apos;m part of the small team that finds, installs, and supports payment terminals for growing businesses — so you can start taking cards without the wait, and without talking to five different people to get there.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0a6356] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              Get my free terminal <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#process"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c9dcd6] bg-white/70 px-6 text-sm font-bold text-ink transition hover:border-ink hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              See how it works
            </a>
          </div>
          <p className="mt-8 text-sm font-medium text-slate">No long forms. No waiting weeks to get approved.</p>
        </motion.div>

        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative rotate-[0.8deg] overflow-hidden rounded-[2.25rem] bg-mint p-3 shadow-soft-lg">
            <img
              src={merchantImg}
              alt="A customer paying by contactless card at a shop counter"
              className="aspect-[1.03/1] w-full rounded-[1.55rem] object-cover object-[42%_center]"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[1.55rem] bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>
          <motion.figcaption
            initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -bottom-6 -left-3 inline-flex max-w-56 -rotate-2 items-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold leading-5 text-ink shadow-soft sm:-left-8"
          >
            <MapPin className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            A Boost terminal, in action
          </motion.figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
