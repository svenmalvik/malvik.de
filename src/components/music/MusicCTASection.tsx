import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const MusicCTASection = () => {
  return (
    <section className="py-32 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Let's Create Together
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or booking for an event? Let's talk.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary px-10 py-7 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href="mailto:sven@malvik.de">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Additional info */}
          <p className="text-sm text-primary-foreground/70">
            Available for DJ sets, collaborations, and special events
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicCTASection;
