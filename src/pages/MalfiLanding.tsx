import MalfiHeroSection from "@/components/malfi/MalfiHeroSection";
import MalfiFeatureSection from "@/components/malfi/MalfiFeatureSection";
import MalfiSecuritySection from "@/components/malfi/MalfiSecuritySection";
import MalfiTechnicalSection from "@/components/malfi/MalfiTechnicalSection";
import MalfiDesignSection from "@/components/malfi/MalfiDesignSection";
import MalfiUseCasesSection from "@/components/malfi/MalfiUseCasesSection";
import MalfiAssetsSection from "@/components/malfi/MalfiAssetsSection";
import MalfiFAQSection from "@/components/malfi/MalfiFAQSection";
import MalfiCTASection from "@/components/malfi/MalfiCTASection";

const MalfiLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MalfiHeroSection />
      <MalfiFeatureSection />
      <MalfiSecuritySection />
      <MalfiTechnicalSection />
      <MalfiDesignSection />
      <MalfiUseCasesSection />
      <MalfiAssetsSection />
      <MalfiFAQSection />
      <MalfiCTASection />
    </div>
  );
};

export default MalfiLanding;
