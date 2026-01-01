import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const MusicCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600">
      {/* Background decoration - More vibrant and playful */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Animated wave patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            d="M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150"
            className="animate-pulse"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="3"
            d="M0,250 Q250,200 500,250 T1000,250 T1500,250 T2000,250"
            className="animate-pulse"
            style={{ animationDelay: '0.7s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
            Let's Create Together
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
            Interested in collaborating or booking for an event? Let's talk.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-white text-purple-600 px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <a href="mailto:sven@malvik.de">
                <Mail className="mr-2 h-5 w-5 animate-bounce" style={{ animationDuration: '1s' }} />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Additional info */}
          <p className="text-sm text-white/90 font-medium">
            Available for DJ sets, collaborations, and special events
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicCTASection;
