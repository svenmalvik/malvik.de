import BrainrHeroSection from "@/components/brainr/BrainrHeroSection";
import BrainrProblemSection from "@/components/brainr/BrainrProblemSection";
import BrainrHowItWorksSection from "@/components/brainr/BrainrHowItWorksSection";
import BrainrFeatureSection from "@/components/brainr/BrainrFeatureSection";
import BrainrTechnicalSection from "@/components/brainr/BrainrTechnicalSection";
import BrainrUseCasesSection from "@/components/brainr/BrainrUseCasesSection";
import BrainrFAQSection from "@/components/brainr/BrainrFAQSection";
import BrainrCTASection from "@/components/brainr/BrainrCTASection";

const BrainrLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <BrainrHeroSection />
      <BrainrProblemSection />
      <BrainrHowItWorksSection />
      <BrainrFeatureSection />
      <BrainrTechnicalSection />
      <BrainrUseCasesSection />
      <BrainrFAQSection />
      <BrainrCTASection />
    </div>
  );
};

export default BrainrLanding;
