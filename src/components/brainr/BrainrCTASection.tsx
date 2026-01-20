import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrainrCTASection = () => {
  return (
    <section className="py-32 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Second Brain?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop letting great ideas slip away. Capture thoughts in Slack, let AI organize them, and find anything instantly.
          </p>

          <div className="flex justify-center mb-12">
            <a href="mailto:sven@malvik.de?subject=Brainr%20-%20I%27d%20like%20to%20learn%20more">
              <Button
                size="lg"
                className="bg-white text-primary px-8 py-7 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </a>
          </div>

          <p className="text-primary-foreground/70 text-sm max-w-md mx-auto">
            Reach out to get a personalized demo or learn how Brainr can fit your workflow
          </p>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-10 mt-16">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/80 md:flex-row">
              <p className="text-center md:text-left">
                Crafted with care by{" "}
                <a
                  href="https://www.linkedin.com/in/svenmalvik/"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sven Malvik
                </a>
              </p>
              <a
                href="mailto:sven@malvik.de"
                className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainrCTASection;
