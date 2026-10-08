import { Headset, MapPinned, Zap } from "lucide-react";

const chips = [
  { Icon: MapPinned, label: "A real walkthrough before you sign anything" },
  { Icon: Zap, label: "Fast, clean install at your counter" },
  { Icon: Headset, label: "A team that still answers the phone" },
];

const Benefits = () => (
  <section aria-label="What you can expect" className="border-y border-[#e3eee9] bg-cloud px-5 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
      {chips.map(({ Icon, label }) => (
        <div key={label} className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-soft">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint-light/70 text-teal">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-semibold leading-snug text-ink">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
