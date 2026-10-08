import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CreditCard, MonitorSmartphone, Smartphone } from "lucide-react";

const services = [
  {
    name: "Merchant processing",
    title: "A clearer way to take card payments.",
    description: "Get a setup that suits the way your business actually sells — online, in person, or both.",
    Icon: CreditCard,
  },
  {
    name: "Smart hardware",
    title: "Tools your team won't dread using.",
    description: "Countertop, mobile, and handheld terminals that keep checkout fast for staff and customers.",
    Icon: Smartphone,
  },
  {
    name: "Point of sale",
    title: "More of the day in one place.",
    description: "Payments, orders, staff, and reporting, brought into a point-of-sale system that feels easy to run.",
    Icon: MonitorSmartphone,
  },
];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-cloud px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-semibold text-teal">What we set up</p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">Three things, done properly.</h2>
          <p className="max-w-xl text-base leading-7 text-slate">Choose what helps today, and build on it when your business changes tomorrow.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.35 }}
              className="group flex flex-col rounded-[1.75rem] bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-light/70 text-teal">
                <service.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate">{service.name}</p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-[-0.015em] text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{service.description}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                Find the right fit <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
