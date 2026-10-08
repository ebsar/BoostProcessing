import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import missionImg from "@/assets/mission-img.jpg";
import Squiggle from "@/components/Squiggle";

const reasons = [
  "A setup shaped around how you actually sell",
  "Plain answers before you sign anything",
  "A real team once you're live — not a help desk queue",
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const WhyUs = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.92fr_1fr] lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <div className="-rotate-[0.8deg] overflow-hidden rounded-[2rem] bg-ink p-3">
            <img src={missionImg} alt="A card payment being made on a countertop terminal" className="aspect-[1.15/1] w-full rounded-[1.35rem] object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-5 -right-2 rotate-2 rounded-2xl bg-teal px-5 py-4 text-white shadow-soft sm:-right-6">
            <p className="font-display text-3xl font-extrabold leading-none">15 min</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]">to get oriented</p>
          </div>
        </motion.div>

        <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
          <p className="text-sm font-semibold text-teal">Why businesses host with us</p>
          <h2 className="mt-5 max-w-lg font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
            The terminal is free.{" "}
            <span className="relative inline-block">
              The relationship isn&apos;t a gimmick.
              <Squiggle className="absolute -bottom-1 left-0 h-2.5 w-full text-mint-light" />
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate">
            I don&apos;t want you to feel like another account number. We&apos;re not a call center reading from a script — I show up, look at how your counter actually works, and set up a terminal that fits. Then I stay reachable after you&apos;re live, because that&apos;s the part most places skip.
          </p>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm font-semibold text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-light/70 text-teal">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {reason}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-bold text-ink transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            Talk through your options <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
