import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/mjgazaao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        processing: "",
        bestTime: "",
        message: "",
      });
    } else {
      alert("Diçka shkoi keq, provo prap!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
          CONNECT WITH US
        </h2>

        {submitted ? (
          <p className="text-center text-lg text-foreground font-medium">
            ✅ Messages has been sent, we will contact you as soon as possible! 
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border rounded"
            />

            <input
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 border rounded"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 border rounded"
            />

            <select
              required
              value={form.processing}
              onChange={(e) =>
                setForm({ ...form, processing: e.target.value })
              }
              className="w-full px-4 py-3 border rounded"
            >
              <option value="">Processing amount *</option>
              <option>$0-10k/mo</option>
              <option>$10k-$25k/mo</option>
              <option>$25k-$50k/mo</option>
              <option>$50k+/mo</option>
            </select>

            <select
              value={form.bestTime}
              onChange={(e) =>
                setForm({ ...form, bestTime: e.target.value })
              }
              className="w-full px-4 py-3 border rounded"
            >
              <option value="">Best time to contact</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <textarea
              placeholder="Message..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border rounded"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D1FFBD] text-black hover:bg-[#b8e6a8]"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;