import { CheckCircle2, MapPin, Wrench } from "lucide-react";

const steps = [
  { Icon: MapPin, title: "We scope your counter", description: "Tell us about your setup. We'll check if a terminal makes sense for your space." },
  { Icon: Wrench, title: "We install your terminal", description: "Our team handles delivery and setup, and walks your staff through it on day one." },
  { Icon: CheckCircle2, title: "You start taking cards", description: "Go live with a real team on call if anything comes up down the line." },
];

const Process = () => (
  <section id="process" className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-mint-light">How placement works</p>
        <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-5xl">Three steps, no maze.</h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-[1.75rem] bg-white/[0.06] p-7">
            <p className="text-sm font-bold text-mint">0{index + 1}</p>
            <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-ink">
              <step.Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold leading-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
