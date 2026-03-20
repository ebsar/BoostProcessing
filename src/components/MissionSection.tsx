import missionImg from "@/assets/mission-img.jpg";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
        <div className="overflow-hidden">
          <img
            src={missionImg}
            alt="Digital payment processing"
            className="w-full h-full object-cover min-h-[300px]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            OUR MISSION
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            Boost Solution Processing LLC's mission is to help small and local businesses maximize their profitability at their point of sale via enhanced merchant processing and up-to-date terminal equipment. In 15 minutes or less we can show you how to eliminate your credit card fees!
          </p>
          <a
  href="#contact"
  className="inline-block mt-8 px-10 py-3 bg-[#D1FFBD] text-black font-heading font-semibold text-sm tracking-wide rounded hover:bg-[#b8e6a8] transition-colors"
>
  Find Out More
</a>
          
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
