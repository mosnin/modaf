import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ToolsMarquee } from "@/components/sections/tools-marquee";
import { GetStartedSection } from "@/components/sections/get-started";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { StructureSection } from "@/components/sections/structure";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <GetStartedSection />
        <HowItWorksSection />
        <StructureSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
