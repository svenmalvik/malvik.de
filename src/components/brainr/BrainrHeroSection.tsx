import { Button } from "@/components/ui/button";
import { Mail, Sparkles, MessageSquare, Brain, FileText, ArrowRight } from "lucide-react";

const BrainrHeroSection = () => {
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
            <span className="text-sm font-medium text-foreground">Your Second Brain, Powered by AI</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Capture in Slack,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Organize in Notion
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Jot down thoughts in Slack. AI classifies intent and organizes them into your Notion workspace using the PARA method. Find anything instantly with semantic search.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a href="mailto:sven@malvik.de?subject=Brainr%20-%20I%27d%20like%20to%20learn%20more">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-2xl shadow-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Hero Visual - Brain with floating elements */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative flex items-center justify-center">
              {/* Slack - floating left */}
              <div className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 text-green-500" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground">Slack</span>
              </div>

              {/* Central Brain */}
              <div className="relative">
                <Brain className="h-40 w-40 md:h-48 md:w-48 text-primary" strokeWidth={0.8} />
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full -z-10"></div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent"></div>
                </div>
              </div>

              {/* Notion - floating right */}
              <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground">Notion</span>
              </div>
            </div>
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

export default BrainrHeroSection;
