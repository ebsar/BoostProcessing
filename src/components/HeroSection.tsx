import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
      <img
        src={heroBg}
        alt="City skyline at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      <div className="relative z-10 text-center px-6 py-20 animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          EASY & SMART
          <br />
          MERCHANT
          <br />
          SOLUTIONS
        </h1>
       <a
  href="#contact"
  className="inline-block mt-8 px-10 py-3 bg-[#D1FFBD] text-black font-heading font-semibold text-sm tracking-wide rounded hover:bg-[#b8e6a8] transition-colors"
>
  Get In Touch
</a>
      </div>
    </section>
  );
};

export default HeroSection;
