import { Button } from "@/components/ui/button";
import { Music, ExternalLink } from "lucide-react";

const MusicHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh"></div>

      {/* Animated orbs - More vibrant and playful */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      </div>

      {/* Wave pattern decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(6, 182, 212)" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
            className="animate-pulse"
          />
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-purple-400/40 shadow-glow animate-bounce" style={{ animationDuration: '3s' }}>
            <Music className="h-4 w-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Trance & Techno from Norwegian Fjords</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Trancefjord
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Where Trance music meets Norwegian fjords. A hobby DJ exploring the depths of electronic soundscapes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-10 py-7 rounded-2xl shadow-glow hover:shadow-xl transition-all hover:scale-110 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <a
                href="https://www.youtube.com/@trancefjord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit YouTube Channel
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
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

export default MusicHeroSection;
