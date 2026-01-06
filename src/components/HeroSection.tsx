import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Apple, Shield, HardDrive, Building2, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-primary/20 shadow-glow">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Built for Enterprises, Tuned for Teams</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Meet Vissper, the Smart AI Meeting Companion
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Capture, transcribe, and summarize meetings automatically so teams stay aligned, informed, and ready to ship what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-6">
            <Button
              disabled
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-2xl shadow-glow"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for macOS (Coming Soon)
            </Button>
            <span className="text-sm text-muted-foreground">Version 0.3.2 • macOS 12.0+</span>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-border/60">
                <a href="https://github.com/svenmalvik/vissper-oss" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-border/60">
                <a href="https://www.linkedin.com/in/svenmalvik/" target="_blank" rel="noopener noreferrer">
                  <Building2 className="mr-2 h-5 w-5" />
                  Enterprise? Contact Sven
                </a>
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="pt-8 grid gap-6 sm:grid-cols-2 max-w-xl mx-auto text-left">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/40">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">Your data stays on your device</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/40">
              <HardDrive className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Easy Installation</h3>
                <p className="text-sm text-muted-foreground">Drag and drop to Applications</p>
              </div>
            </div>
          </div>

          {/* Explore Features button */}
          <div className="pt-4">
            <a href="#comparison">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 rounded-2xl border-primary/40 hover:bg-primary/10 transition-all hover:scale-105 group"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Visual indicator */}
          <div className="mt-20 text-muted-foreground animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-border rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
