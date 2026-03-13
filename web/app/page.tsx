import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EmpathySection from "./components/EmpathySection";
import ValueSection from "./components/ValueSection";
import FeaturesSection from "./components/FeaturesSection";
import HowToStartSection from "./components/HowToStartSection";
import FounderStorySection from "./components/FounderStorySection";
import SafetySection from "./components/SafetySection";
import FutureSection from "./components/FutureSection";
import ActionSection from "./components/ActionSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <ValueSection />
        <FeaturesSection />
        <HowToStartSection />
        <FounderStorySection />
        <SafetySection />
        <FutureSection />
        <ActionSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
