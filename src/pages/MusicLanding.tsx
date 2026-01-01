import MusicHeroSection from "@/components/music/MusicHeroSection";
import MusicVideosSection from "@/components/music/MusicVideosSection";
import MusicCTASection from "@/components/music/MusicCTASection";

const MusicLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MusicHeroSection />
      <MusicVideosSection />
      <MusicCTASection />
    </div>
  );
};

export default MusicLanding;
