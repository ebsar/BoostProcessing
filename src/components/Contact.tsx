import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

type FormValues = { name: string; email: string; phone: string; processing: string; message: string };

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#cbd9e9] bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/15";

const promises = ["A clear answer about your options", "Practical guidance for your team", "Someone you can come back to"];

const Contact = () => {
  const [form, setForm] = useState<FormValues>({ name: "", email: "", phone: "", processing: "", message: "" });
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
    <section id="contact" className="bg-ink px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="text-white">
          <p className="text-sm font-semibold text-mint-light">Start here</p>
          <h2 className="mt-5 max-w-lg font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-5xl">
            Let&apos;s get a terminal on your counter.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/80">
            We&apos;ll use the details to make the first conversation useful — not to send you a generic sales pitch.
          </p>
          <ul className="mt-10 space-y-3.5 border-t border-white/20 pt-6">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-ink">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {promise}
              </li>
            ))}
          </ul>
          <p className="mt-9 max-w-md -rotate-1 font-display text-base italic text-white/70">
            Fill this in, and I&apos;ll read it myself before anyone calls you back.
            <br />
            <span className="not-italic text-mint-light">— Bejtullah, Boost Solution</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-white p-5 shadow-soft-lg sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-ink">
              Full name
              <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={fieldClass} placeholder="Your name" autoComplete="name" />
            </label>
            <label className="text-sm font-bold text-ink">
              Work email
              <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={fieldClass} placeholder="you@business.com" autoComplete="email" />
            </label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-ink">
              Phone <span className="font-normal text-slate-500">(optional)</span>
              <input type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={fieldClass} placeholder="(555) 000-0000" autoComplete="tel" />
            </label>
            <label className="text-sm font-bold text-ink">
              Monthly processing
              <select required value={form.processing} onChange={(event) => setForm({ ...form, processing: event.target.value })} className={fieldClass}>
                <option value="">Select range</option>
                <option value="$0–10k/mo">$0–10k/mo</option>
                <option value="$10k–25k/mo">$10k–25k/mo</option>
                <option value="$25k–50k/mo">$25k–50k/mo</option>
                <option value="$50k+/mo">$50k+/mo</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold text-ink">
            What would you like to improve? <span className="font-normal text-slate-500">(optional)</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className={`${fieldClass} min-h-28 resize-y`}
              placeholder="Tell us what needs to work better."
            />
          </label>

          {formStatus === "success" && (
            <p role="status" className="mt-4 rounded-xl bg-mint-light/40 px-4 py-3 text-sm font-semibold text-teal">
              Thanks — your message is on its way. We&apos;ll be in touch shortly.
            </p>
          )}
          {formStatus === "error" && (
            <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              We couldn&apos;t send that right now. Please try again or contact us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={formStatus === "loading"}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-teal px-5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0a6356] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formStatus === "loading" ? "Sending your request…" : "Send my request"}
            {formStatus !== "loading" && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            By submitting, you agree to our{" "}
            <a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal underline-offset-2 hover:underline">
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
