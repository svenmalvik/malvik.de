import { Link } from "react-router-dom";
import { Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MalfiCTASection = () => {
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
            Ready to Master Your Wealth?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience luxury wealth management designed for the discerning individual. Private, secure, and elegantly crafted for iOS 17+.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              disabled
              size="lg"
              className="bg-white text-primary px-8 py-7 rounded-full text-lg font-semibold shadow-lg"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store (Coming Soon)
            </Button>
          </div>

          {/* System requirements badge */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/60"></span>
              <span>iOS 17.0 or later</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/60"></span>
              <span>iPhone optimized</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/60"></span>
              <span>12+ languages supported</span>
            </div>
          </div>

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
              <div className="flex gap-4 text-center">
                <Link
                  to="/malfi/privacy"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                >
                  Privacy
                </Link>
                <Link
                  to="/malfi/support"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                >
                  Support
                </Link>
                <Link
                  to="/malfi/terms"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MalfiCTASection;
