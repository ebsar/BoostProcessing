import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import BuiltFor from "@/components/BuiltFor";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Benefits />
        <BuiltFor />
        <WhyUs />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
