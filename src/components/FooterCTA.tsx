import { Link } from "react-router-dom";
import { Apple, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
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
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download Vissper Cloud and start capturing insights from your meetings today. Free to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              disabled
              size="lg"
              className="bg-white text-primary px-8 py-7 rounded-full text-lg font-semibold shadow-lg"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for macOS (Coming Soon)
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg border-white/40 text-primary-foreground hover:bg-white/10">
              <a href="https://www.linkedin.com/in/svenmalvik/" target="_blank" rel="noopener noreferrer">
                <Building2 className="mr-2 h-5 w-5" />
                Enterprise? Contact Sven
              </a>
            </Button>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-10 mt-16">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/80 md:flex-row">
              <p className="text-center md:text-left">
                Enterprise-grade meeting intelligence, crafted by{" "}
                <a
                  href="https://www.linkedin.com/in/svenmalvik/"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sven Malvik
                </a>
              </p>
              <Link
                to="/privacy"
                className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
