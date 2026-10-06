import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-0">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
