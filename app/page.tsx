import PricingSection from "@/components/PricingSection";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import LogoStrip from "../sections/LogoStrip";
import OrderFlowSection from "@/components/OrderFlowSection";
import WhyLumeSection from "@/components/WhyLumeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="product">
          <HeroSection />
        </section>

        <LogoStrip />

        <section id="workflows">
          <OrderFlowSection />
        </section>

        <WhyLumeSection />

        <div className="h-32" />

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <FinalCTASection />

        <Footer />
      </main>
    </>
  );
}