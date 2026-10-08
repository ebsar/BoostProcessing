import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Minus, Plus } from "lucide-react";

const faqs = [
  { question: "How quickly can we get started?", answer: "Start with a focused 15-minute conversation. Once we understand your business and current setup, we can outline the right next steps together." },
  { question: "Can you help reduce credit card fees?", answer: "Yes. We review how you process today and explain practical options that may help you manage or offset card acceptance costs." },
  { question: "Do you provide payment terminals and POS systems?", answer: "Yes. We can help you choose countertop, mobile, and point-of-sale equipment that fits the way your team serves customers." },
  { question: "Will I have support after setup?", answer: "Absolutely. You will have a real team to contact whenever you need help with your account, equipment, or payment flow." },
];

const Faq = () => {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-teal">Ask us anything</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">Questions people actually bring up.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate">A few answers to help you get oriented. If yours isn&apos;t here, ask us directly.</p>
          <a
            href="#contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-mint-light/70 px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-mint-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            Ask a question <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question} className="rounded-2xl bg-cloud">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[72px] w-full items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal"
                >
                  <span className="text-base font-bold text-ink">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-soft">
                    {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                  </span>
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
                      <p className="px-6 pb-6 text-sm leading-6 text-slate">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
