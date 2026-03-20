import merchantImg from "@/assets/merchant-img.jpg";
import terminalImg from "@/assets/terminal-img.jpg";
import posImg from "@/assets/pos-img.jpg";

const services = [
  {
    title: "MERCHANT PROCESSING",
    subtitle: "WE CAN CHANGE THE WAY YOU GET PAID",
    description:
      "Delivering secure, reliable, and high-value credit card processing services that you can trust. Our commitment to safety ensures your transactions are handled with utmost dependability, giving you peace of mind and exceptional value.",
    image: merchantImg,
    alt: "Merchant processing payment",
  },
  {
    title: "TERMINAL EQUIPMENT",
    subtitle: "THE BEST EQUIPMENT FOR ANY BUSINESS",
    description:
      "No matter the nature of your business — be it a retail store, restaurant, coffee shop, or bar — we're here to guide you in discovering the perfect payment processing solution.",
    image: terminalImg,
    alt: "Modern payment terminal",
  },
  {
    title: "POINT OF SALE (POS) SYSTEMS",
    subtitle: "ULTRAMODERN MANAGEMENT SOLUTIONS FOR YOUR BUSINESS",
    description:
      "Revolutionize your business operations with our cutting-edge POS systems, offering state-of-the-art management solutions that propel your business forward. Embrace the future of management technology and elevate your efficiency with our ultramodern point-of-sale systems.",
    image: posImg,
    alt: "POS system tablet",
  },
];

const ServicesSection = () => {
  return (
    <section id="merchant" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-center`}
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                {service.title}
              </h2>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-muted-foreground mb-4">
                {service.subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
