import Header from "@/features/home/components/Header";
import HeroSection from "@/features/home/sections/HeroSection";
import ServicosSection from "@/features/services/components/ServicosSection";
import QuemSomosSection from "@/features/home/sections/QuemSomosSection";
import PartnersSection from "@/features/home/sections/PartnersSection";
import DiferenciaisSection from "@/features/home/sections/DiferenciaisSection";
import DepoimentosSection from "@/features/home/sections/DepoimentosSection";
import InstagramSection from "@/features/home/sections/InstagramSection";
import ContatoSection from "@/features/home/sections/ContatoSection";
import Footer from "@/features/home/components/Footer";
import AnimatedBackground from "@/shared/components/AnimatedBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ServicosSection />
          <QuemSomosSection />
          <PartnersSection />
          <DiferenciaisSection />
          <DepoimentosSection />
          <InstagramSection />
          <ContatoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;